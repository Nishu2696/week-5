type Name=String;
type Artist=String;
type url=String;

interface SongConfig{
    SongName:String;
    SongURL:String;
    Singer:String;
}
class CreateList{
    SongName:Name;
    SongURL:url;
    Singer:Artist;
    constructor(config: SongConfig){
        this.SongName=config.SongName;
        this.SongURL=config.SongURL;
        this.Singer=config.Singer;
    }
}
class SongList{
    Songs:CreateList;
    addSongs(info:CreateList){
        this.Songs=info
    }

    mysongs(){
        playSong(this.Songs.SongURL);
    }
}

function playSong(elements){
    let head=document.getElementById("head");
    let body=document.getElementById("mysongs");
    //let url=this.Songs.SongURL;
    console.log(elements);
    document.getElementById("mysongs").setAttribute("src", elements);
    document.getElementById("mysongs").setAttribute("type", "audio/mpeg");
    head.appendChild(body);
    return false;
}

let CreatePlayList= () => {
    let songs= new CreateList({
        SongName:(<HTMLInputElement>document.getElementById("Songname")).value as Name,
        SongURL:(<HTMLInputElement>document.getElementById("songurl")).value as url,
        Singer:(<HTMLInputElement>document.getElementById("singer")).value as Artist
    })

    let myList= new SongList();
    myList.addSongs(songs);
    myList.mysongs();
}