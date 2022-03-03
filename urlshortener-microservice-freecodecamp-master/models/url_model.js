const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const urlSchema = new Schema({
    original_url: String,
    short_url: String
})
const URL = mongoose.model("URL", urlSchema);
let urlExtractor = function (url) {
    let urlSplit;
    if (url.indexOf("https") > -1) {
        urlSplit = url.split("https://");
    } else if (url.indexOf("http") > -1) {
        urlSplit = url.split("http://");
    }
    if (urlSplit === undefined) {
        return urlSplit;
    } else {
        return urlSplit[1].split("/")[0];
    }
};