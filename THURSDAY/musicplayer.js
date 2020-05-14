var CreateList = /** @class */ (function () {
    function CreateList(config) {
        this.SongName = config.SongName;
        this.SongURL = config.SongURL;
        this.Singer = config.Singer;
    }
    return CreateList;
}());
var SongList = /** @class */ (function () {
    function SongList() {
    }
    SongList.prototype.addSongs = function (info) {
        this.Songs = info;
    };
    SongList.prototype.mysongs = function () {
        playSong(this.Songs.SongURL);
    };
    return SongList;
}());
function playSong(elements) {
    var head = document.getElementById("head");
    var body = document.getElementById("mysongs");
    //let url=this.Songs.SongURL;
    console.log(elements);
    document.getElementById("mysongs").setAttribute("src", elements);
    document.getElementById("mysongs").setAttribute("type", "audio/mpeg");
    head.appendChild(body);
    return false;
}
var CreatePlayList = function () {
    var songs = new CreateList({
        SongName: document.getElementById("Songname").value,
        SongURL: document.getElementById("songurl").value,
        Singer: document.getElementById("singer").value
    });
    var myList = new SongList();
    myList.addSongs(songs);
    myList.mysongs();
};
