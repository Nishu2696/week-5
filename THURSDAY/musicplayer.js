var CreateList = /** @class */ (function () {
    function CreateList(config) {
        this.SongName = config.SongName;
        this.SongURL = config.SongURL;
        this.Singer = config.Singer;
    }
    return CreateList;
}());
var mySongsList = /** @class */ (function () {
    function mySongsList(config) {
        this.SongName = config.SongName;
        this.SongURL = config.SongURL;
        this.Singer = config.Singer;
    }
    return mySongsList;
}());
var SongList = /** @class */ (function () {
    function SongList() {
        this.myLists = [];
    }
    SongList.prototype.addSongs = function (info) {
        this.Songs = info;
        console.log(this.Songs.SongURL);
    };
    SongList.prototype.addedsongs = function (info) {
        this.myLists.push(info);
    };
    SongList.prototype.mysongs = function () {
        var name = this.Songs.SongName;
        console.log(name);
        var top = document.getElementById("top");
        var bottom = document.getElementById("songname");
        document.getElementById("songname").innerHTML = "" + name + "";
        top.appendChild(bottom);
        var head = document.getElementById("head");
        var body = document.getElementById("mysongs");
        var url = this.Songs.SongURL;
        console.log(url);
        document.getElementById("mysongs").setAttribute("src", "" + url + "");
        document.getElementById("mysongs").setAttribute("type", "audio/mpeg");
        head.appendChild(body);
        //addOn(name, url);
    };
    return SongList;
}());
/*function addOn(name1, url1){
    let li=document.getElementById("lists");
    for(let i=0;i<this.myLists.length;i++){
        li.innerHTML += this.myLists[i].toHTML();
    }
}*/
var CreatePlayList = function () {
    var songs = new CreateList({
        SongName: document.getElementById("Songname").value,
        SongURL: document.getElementById("songurl").files[0].name,
        Singer: document.getElementById("singer").value
    });
    var addsongs = new mySongsList({
        SongName: document.getElementById("Songname").value,
        SongURL: document.getElementById("songurl").files[0].name,
        Singer: document.getElementById("singer").value
    });
    var myList = new SongList();
    myList.addSongs(songs);
    myList.addedsongs(addsongs);
    myList.mysongs();
};
