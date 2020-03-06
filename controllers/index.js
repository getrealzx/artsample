const r = require('express').Router();

let data = require('../data/data.json');



r.get('/', (req, res) => {
    // console.log(data.albums[0]);

    let pagePhotos = [];

    data.albums.forEach((albumObj) =>{

        pagePhotos = pagePhotos.concat(albumObj.coverImg)
    
    });
    console.log(pagePhotos);


    res.render('index',{
        pageTitle: "Yannis Albums",
        albumImgs: pagePhotos,
        allAlbums: data.albums
        
    })
    
});



module.exports = r;


