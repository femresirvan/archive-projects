const router = require('express').Router();
const URL = require('../models/url_model');
const mongoose = require('mongoose')
const shortId = require('shortid');
router.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

router.post('/api/shorturl/new', async function (req, res) {

    const url = req.body.url
    const urlCode = shortId.generate()

    let testURL = req.body.url;
    testURL = urlExtractor(testURL);

    if (testURL) {
        dns.resolve(testURL, async (err, address, family) => {
            if (err) {
                res.status(404).json({
                    error: 'invalid URL'
                });
            } else {
                try {
                    let findOne = await URL.findOne({
                        original_url: url
                    })
                    if (findOne) {
                        res.status(200).json({
                            original_url: findOne.original_url,
                            short_url: findOne.short_url
                        })
                    } else {
                        findOne = new URL({
                            original_url: url,
                            short_url: urlCode
                        })
                        await findOne.save()
                        res.json({
                            original_url: findOne.original_url,
                            short_url: findOne.short_url
                        })
                    }
                } catch (err) {
                    console.error(err)
                    res.status(500).json('Server error')
                }
            }
        });
    } else {
        res.json({
            error: 'invalid URL'
        });
    }

});

router.get('/api/shorturl/:short_url?', async function (req, res) {
    try {
        const urlParams = await URL.findOne({
            short_url: req.params.short_url
        })
        if (urlParams) {
            return res.redirect(urlParams.original_url)
        } else {
            return res.status(404).json('No URL found')
        }
    } catch (err) {
        console.log(err)
        res.status(500).json('Server error')
    }
});

module.exports = router;