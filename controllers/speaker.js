// const router = require('express').Router();
// let data = require('../data/data.json');




// router.get('/speakers', (req, res) => {


//     let pagePhotos = [];
//     data.speakers.forEach((speakerObj) => {
//         pagePhotos = pagePhotos.concat(speakerObj.artwork)        
//     });

//     res.render('speakers',{
//         pageTitle: "Speaker List",
//         artistName: "",
//         artwork: pagePhotos,
//         allspeakers: data.speakers,
//         pageID: 'speakerList'

//     })    
// })


// router.get('/speakers/:speakerid',(req,res) => {

//     let pagePhotos = [];
//     let pageSpeakers = [];

//     data.speakers.forEach((speakerObj) => {
//         if(speakerObj.shortname== req.param.speakerid){
//             pageSpeakers.push(speakerObj);
//             pagePhotos = speakerObj.artwork;
//         }
        
//     })

//     res.render('speakers',{
//         pageTitle: "Speaker Detail",
//         artistName: pageSpeakers[0].artistname,
//         artwork: pagePhotos,
//         allspeakers: pageSpeakers,
//         pageID: 'pageSpeakers'

//     })   
// })

// module.exports = router;


const express = require('express');
const router = express.Router();
let data = require('../data/data.json');
router.get('/speakers', (req, res)=>{
    //all speakers
    let pagePhotos = [];
    data.speakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    res.render('speakers.ejs', {
        pageTitle: 'Speaker List',
        pageID: 'speakerList',
        artistName: '',
        artwork: pagePhotos,
        allspeakers: data.speakers
    })
})


router.get('/speakers/:speakerid', (req, res)=>{
    let pagePhotos = [];
    let pageSpeakers = [];
    
    data.speakers.forEach((speakerObj)=>{
        if(speakerObj.shortname == req.params.speakerid){
            pageSpeakers.push(speakerObj);
            console.log(pageSpeakers[0]);
            pagePhotos = speakerObj.artwork
        }
    })
    res.render('speakers', {
        pageTitle: `The Story About ${pageSpeakers[0].name}`,
        pageID: 'pageSpeakers',
        // artistName: pageSpeakers[0].artistName,
        artwork: pagePhotos,
        allspeakers: data.speakers
    })
    // console.log(artistName);
})
module.exports = router;