require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

// Get the current datetime
const now = new Date();

// Convert current datetime to Unix epoch timestamp (milliseconds)
const unixTimestamp = now.getTime();

// If you need the Unix epoch time in seconds (some applications expect Unix time in seconds)
const unixTimestampInSeconds = Math.floor(unixTimestamp / 1000);

console.log("Current datetime as Unix epoch timestamp (milliseconds):", unixTimestamp);
console.log("Current datetime as Unix epoch timestamp (seconds):", unixTimestampInSeconds);

// The param after is hardcoded to 9/1/2022 12AM GMT.  This is the day the collection was created
const baseParams = `after=1661990400&before=${unixTimestampInSeconds}&event_type=sale&limit=50`;
const collectionSlug = 'kernels-by-julian-hespenheide';
const baseUrl = `https://api.opensea.io/api/v2/events/collection/${collectionSlug}?${baseParams}`;

console.log(baseUrl);

const options = {
    headers: { 
        'Accept': 'application/json', 
        'x-api-key': process.env.API_KEY // Replace this with your actual API key
    }
};

let allEvents = []; // Array to store all fetched events

async function fetchEvents(nextCursor) {
    let url = baseUrl;
    if (nextCursor) {
        url += `&next=${nextCursor}`; // Append the next cursor as a query parameter
    }

    try {
        const response = await axios.get(url, options);
        allEvents.push(...response.data.asset_events); // Store the asset events into the array

        if (response.data.next) {
            console.log('Fetching next page...');
            await fetchEvents(response.data.next); // Recursively fetch next page
        } else {
            console.log('All pages have been fetched, logging data...');
            const jsonData = JSON.stringify(allEvents, null, 2);
            console.log(jsonData); // Log all data to the console
            fs.writeFile(`data-files/${collectionSlug}-sales.json`, jsonData, (err) => {
                if (err) throw err;
                console.log(`Data written to file ${collectionSlug}-sales.json`);
            }); // Write the JSON data to a file
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Initial call to start the fetch process
fetchEvents();