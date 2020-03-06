const express = require('express');
const router = express.Router();
let data = require('../data/data.json');


router.get('/albums', (req, res)=>{
    //all albums
    let songBucket =[];

    data.albums.forEach((albObj) => {
        songBucket = songBucket.concat(albObj.songList);
    })


    res.render('albums.ejs', {
        pageTitle: 'album List',
        pageID: 'albumList',
        collections: songBuckets,
        allAlbums: data.albums
    })
})


// router.get('/albums/:albumid', (req, res)=>{
//     let songBucket =[];
//     let pagealbums = [];
//     data.albums.forEach((albumObj)=>{
//         if(albumObj.albumName == req.params.albumid){
//             pagealbums.push(albumObj);
//             console.log(pagealbums[0]);
//             songBucket = albumObj.songList
//         }
//     })

//     res.render('albums', {

//         pageTitle: pagealbums[0].albumName,
//         pageID: 'pagealbums',
//         songList: pagePhotos,
//         allAlbums: data.albums
//     })

// })


module.exports = router;