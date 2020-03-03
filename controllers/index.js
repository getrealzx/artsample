const r = require('express').Router();

let data = require('../data/data.json');



r.get('/', (req, res) => {
    // console.log(data.speakers[0]);

    let pagePhotos = [];

    data.speakers.forEach((speakerObj) =>{

        pagePhotos = pagePhotos.concat(speakerObj.artwork)

    });

    // console.log(pagePhotos);


    res.render('index',{
        artwork: pagePhotos,
        allspeakers: data.speakers
    })
});



module.exports = r;


// const express = require('express');
// const router = express.Router();
// let data = require('../data/data.json')
// router.get('/', (req, res)=>{
//     let pagePhotos = [];
//     data.speakers.forEach((speakerObj)=>{
//         pagePhotos = pagePhotos.concat(speakerObj.artwork)
//     })
//     console.log(pagePhotos)
//     res.render('index', {
//         artwork: pagePhotos
//     })
// })
// module.exports = router;