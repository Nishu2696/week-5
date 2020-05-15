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

class mySongsList{
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
    myLists:mySongsList[]=[];
    addSongs(info:CreateList){
        this.Songs=info
        console.log(this.Songs.SongURL);
    }

    addedsongs(info:CreateList){
        this.myLists.push(info);
    }
    mysongs(){
        let name=this.Songs.SongName;
        console.log(name);
        let top=document.getElementById("top");
        let bottom=document.getElementById("songname");
        document.getElementById("songname").innerHTML=""+name+"";
        top.appendChild(bottom);
        let head=document.getElementById("head");
        let body=document.getElementById("mysongs");
        let url=this.Songs.SongURL;
        console.log(url);
        document.getElementById("mysongs").setAttribute("src", ""+url+"");
        document.getElementById("mysongs").setAttribute("type", "audio/mpeg");
        head.appendChild(body);
        //addOn(name, url);
    }
}

/*function addOn(name1, url1){
    let li=document.getElementById("lists");
    for(let i=0;i<this.myLists.length;i++){
        li.innerHTML += this.myLists[i].toHTML();
    }
}*/


let CreatePlayList= () => {
    let songs= new CreateList({
        SongName:(<HTMLInputElement>document.getElementById("Songname")).value as Name,
        SongURL:(<HTMLInputElement>document.getElementById("songurl")).files[0].name as url,
        Singer:(<HTMLInputElement>document.getElementById("singer")).value as Artist
    });
    let addsongs= new mySongsList({
        SongName:(<HTMLInputElement>document.getElementById("Songname")).value as Name,
        SongURL:(<HTMLInputElement>document.getElementById("songurl")).files[0].name as url,
        Singer:(<HTMLInputElement>document.getElementById("singer")).value as Artist
    });
    let myList= new SongList();
    myList.addSongs(songs);
    myList.addedsongs(addsongs);
    myList.mysongs();
}