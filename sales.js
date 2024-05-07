require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const baseParams = 'after=1661990400&before=1715073743&event_type=sale&limit=50';
const baseUrl = `https://api.opensea.io/api/v2/events/collection/kernels-by-julian-hespenheide?${baseParams}`;

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
            fs.writeFile('kernels-historical-sales.json', jsonData, (err) => {
                if (err) throw err;
                console.log('Data written to file output.json');
            }); // Write the JSON data to a file
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Initial call to start the fetch process
fetchEvents();