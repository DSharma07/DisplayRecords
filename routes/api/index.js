const express = require('express');
var fetch = require('node-fetch');
const router = express.Router()

router.get('/hola', (req, res) => {
    res.send('hola hola');
});

router.get('/list-records', (req, res) => {
    const url = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals';
    fetch(url)
    .then((resp) => resp.json())
    .then(data => {
        let topLevel = {};
        data.map(input => { 
            input.bands.map(otherInput => {
                if(!topLevel[otherInput.recordLabel]) {
                    topLevel[otherInput.recordLabel] = {
                        band: []
                    };
                }
                topLevel[otherInput.recordLabel].band.push({
                    name: otherInput.name,
                    festivalName: input.name? input.name: "-"
                });
            })
        });
        let pairs=[];
        for(var key in topLevel) {
            pairs.push({'key': key, 'value': topLevel[key].band})
        };
        
        res.json(pairs.sort((a, b) => a.key.localeCompare(b.key)));
    })
    .catch(err => {
        res.status(400).send('Error');
    });
});

module.exports = router;
