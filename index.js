require('dotenv').config();
const axios = require('axios');

const options = {
    headers: { 
        'Accept': 'application/json', 
        'x-api-key': process.env.API_KEY // Replace this with your actual API key
    }
};

// Current Listings
// axios.get('https://api.opensea.io/api/v2/listings/collection/kernels-by-julian-hespenheide/all', options)
//   .then(response => {
//       // Convert the response data to a JSON string with indentation
//       console.log(JSON.stringify(response.data, null, 2));
//   })
//   .catch(err => console.error(err));

// Historical Sales
fetch('https://api.opensea.io/api/v2/events/collection/kernels-by-julian-hespenheide?after=1661990400&before=1715073743&event_type=sale&limit=50', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// General Stats
// fetch('https://api.opensea.io/api/v2/collections/kernels-by-julian-hespenheide/stats', options)
//     .then(stats => stats.json())    
//     .then(stats => console.log(stats))
//     .catch(err => console.error(err));

// Get NFTs "by trait"
// const baseUrl = "https://api.opensea.io/api/v2/chain/ethereum/contract/0x381233D5584fDb42e46b4D9ba91876479AAb7AcD/nfts/";

// let matchedNFTs = {};

// const tokenIds = [147, 199, 257, 276, 345, 479, 545, 582, 642, 682, 687, 835, 896, 90, 913, 100];

// async function fetchNFTData(tokenId) {
//     try {
//         const response = await axios.get(baseUrl + tokenId, options);
//         const nft = response.data.nft;
//         const hasDesiredTrait = nft.traits.some(trait => trait.value === "Julian Hespenheide");
//         if (hasDesiredTrait) {
//             matchedNFTs[nft.identifier] = nft;
//         }
//     } catch (error) {
//         console.error('Error fetching data for token ID', tokenId, ':', error.message);
//     }
// }

// async function fetchAllNFTs() {
//     for (let tokenId of tokenIds) {
//         await fetchNFTData(tokenId);
//         await delay(200); // Adjust the delay as needed based on API rate limits
//     }
//     console.log("Finished fetching all NFTs.");
//     return matchedNFTs;
// }

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// fetchAllNFTs().then(matchedNFTs => {
//     console.log('Matched NFTs:', JSON.stringify(matchedNFTs, null, 2));
// });
