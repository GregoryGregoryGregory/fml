# fml
A wrapper around fmylife.com 

## Usage

```js
const fml = require("path/here");

// Fetch a random fml story
fml.random().then(console.log);

// Search for fml stories
fml.search("memes").then(console.log);

// Fetch top fml stories
// Filters: day, month, year, allTime
fml.top("allTime").then(console.log);
```
