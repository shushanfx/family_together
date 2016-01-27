var jsdom = require("jsdom");

jsdom.env(
    "http://www.starbucks.com.tw/coffee/catalog.jspx",
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
        console.log("Scan for images...");
        window.$("img").each(function(index, item){
            console.log("Src: " + window.$(item).attr("src"));
        });
        console.log("Scan for links...");
        window.$("a").each(function(index, item){
            console.log("Href: " + window.$(item).attr("href"));
            console.log("Content: " + window.$(item).text());
        });
    }
);