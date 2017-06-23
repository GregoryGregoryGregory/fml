const request = require("snekfetch").get;
const load = require("cheerio").load;

exports.random = async() => {
    const res = (await request("http://www.fmylife.com/random")).body;
    const $ = load(res);

    return $("p.block").text().split("\n\n")[1].trim();
};

exports.search = async(term) => {
    if (!term) throw new Error("No search term was provided.");

    const res = (await request(`http://www.fmylife.com/search/${encodeURIComponent(term)}`)).body;

    const $ = load(res);

    return $("p.block").text().split("\n\n").filter(x => x.length && x.length !== 0);
};

exports.top = async(filter) => {
    const filters = {
        day: "top_day",
        week: "top_week",
        month: "top_month",
        year: "top_year",
        allTime: "top"
    };

    if (!filters[filter]) throw new Error("Invalid filter.");

    const res = (await request(`http://www.fmylife.com/tops/top/${filters[filter]}`)).body;

    const $ = load(res);

    return $("p.block").text().split("\n\n").filter(x => x.length && x.length !== 0);
};
