const axios = require('axios')
const Observable = require('rxjs/observable')
const fs = require('fs')
const cheerio = require('cheerio')

const baseUrl = 'https://www.vgmusic.com/music/console/nintendo/snes'
const ffviRE = /^Final\sFantasy\sIII$/g
const ffmqRE = /^Final\sFantasy\sMystic\sQuest$/g

axios.get(baseUrl)
        .then((response) => {
            const $ = cheerio.load(response.data)
            console.log(
                $('tr.header:nth-child(2330) > td:nth-child(1)')
                    .text()

                // .next('tr.header').length
                )
        })
        .catch((err) => console.log(err))
