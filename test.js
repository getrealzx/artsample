let data = require('./data/data.json');

// console.log(data);

SongBucket =[];

data.albums.forEach((albObj) => {
    SongBucket = SongBucket.concat(albObj.songList);
})


console.log(SongBucket);




<!-- 
    <img src="images/albums/<%= albumImgs[0] %>" alt="">

    <div><%= allAlbums[0].shortSummary %></div> -->