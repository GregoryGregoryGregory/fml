const fml = require("fmylife");
 
// Fetch a random fml story 
fml.random().then(console.log);
 
// Search for fml stories 
fml.search("memes").then(console.log);
 
// Fetch top fml stories 
// Filters: day, week, month, year, allTime 
fml.top("allTime").then(console.log);
