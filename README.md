# OpenSea API Project

This is a NodeJS project for interacting with the OpenSea API, primarily focusing on fetching event data for specific NFT collections. The project includes scripts to fetch current listings, historical sales, and general stats for NFT collections.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Fetch Events](#fetch-events)
  - [Fetch Listings](#fetch-listings)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd openseaapi
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   
## Configuration
Create a `.env` file in the root directory and add your OpenSea API key:
  ```makefile
  API_KEY=your_opensea_api_key
  ```

## Usage

### Fetch Events

To fetch historical sales events for a specific collection, you can run the `sales.js` script. This script fetches events for the "bright-moments-finale" collection, filtering for specific NFT identifiers.

```sh
node sales.js
```

### Fetch Listings

To fetch current listings for specific tokens in the "bright-moments-finale" collection, run the index.js script.

```sh
node index.js
```
## Project Structure

- `index.js`: Script to fetch current listings for specific tokens in a collection.
- `sales.js`: Script to fetch historical sales events for a specific collection.
- `package.json`: Project metadata and dependencies.
- `package-lock.json`: Lockfile for dependencies.
- `bright-moments-finale-sale.json`: Example data for sales events of the "bright-moments-finale" collection.
- `kernels-by-julian-hespenheide-sale.json`: Example data for sales events of the "kernels-by-julian-hespenheide" collection.

## Dependencies

- `axios`: Promise-based HTTP client for making API requests.
- `dotenv`: Module to load environment variables from a `.env` file.
- `express`: Web framework for Node.js.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the ISC License.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!
