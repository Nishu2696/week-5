//only possible runs are 0,1,2,4,6
var runs = [0, 1, 2, 4, 6];
var change = 0;
//using count for moving through countdown()
var count = 0;
//the start value for the timer is set at 60seconds
var secs = 60;
//creating an event listener for hit-1 and hit-2
var click = 0;
var btn1 = document.getElementById("button-1");
btn1.addEventListener("click", timer);
var btn2 = document.getElementById("button-2");
btn1.addEventListener("click", timer);
//a variable is created and its incremented each item when the function countdown() is pressed and the upper limit for this variable is set to 10 as there are 10 player
var no_of_player = 0;
//a variable  is created so that a single player can face 6 balls at max
var no_of_balls = 1;
var balls;
var output = [];
//a variables are created to store the respective total team score
var teamscore = [];
var team1score = 0;
var team2score = 0;
var max1score;
var max2score;
var max1index;
var max2index;
//countdown function is evoked when page is loaded 
function countdown() {
    if (count === 0) {
        scoreboard();
    }
    if (count === 1) {
        scoreboard();
    }
}
//this will stop doubling the timer further when respective hit button is pressed
function timer() {
    setTimeout("decrement()", 60);
    if (click === 0) {
        btn1.removeEventListener("click", timer);
    }
    if (click === 1) {
        btn2.removeEventListener("click", timer);
    }
}
function scoreboard() {
    //total of the single player is calculated
    var total_single_player;
    //creating 10players by each player getting only 6 balls hence new variable called balls is created
    balls = no_of_balls % 6;
    //appending the no_of_player
    if ((balls === 1) && (no_of_player < 20)) {
        //total_single_player=0;
        no_of_player++;
    }
    console.log("no_of_players", no_of_player);
    var div1 = document.getElementById("divTableRow" + no_of_player + "");
    //after 60 seconds if all the players from team-1 havent batted so changed to next table
    if ((count === 1) && (change === 0)) {
        //updating the table-1 if all the players from team-1 hasnt played
        if ((balls < 7) && (balls > 1) && (change === 0)) {
            if (balls === 0) {
                balls = 6;
            }
            for (var i = balls; i < 7; i++) {
                var div5 = document.createElement("div");
                div5.setAttribute("class", "divTableCell bg-warning text-center pt-2");
                div5.innerHTML = "0";
                div1.appendChild(div5);
                output.push(0);
                //total_single_player=total_single_player+runs[runs_scored];
                //console.log("total_single_player", total_single_player);
            }
            total_single_player = 0;
            var div6 = document.createElement("div");
            div6.setAttribute("class", "divTableCell bg-success text-white text-center pt-2");
            for (var i = 0; i < 6; i++) {
                total_single_player = total_single_player + output[i];
            }
            teamscore.push(total_single_player);
            console.log(teamscore);
            div6.innerHTML = "" + total_single_player + "";
            div1.appendChild(div6);
            //console.log("total_single_player", total_single_player);
            for (var i = 0; i < 6; i++) {
                output.shift();
            }
        }
        //calculating the total team score for team-1
        if (change === 0) {
            change++;
            for (var i = 0; i < teamscore.length; i++) {
                team1score = team1score + teamscore[i];
            }
            //max(teamscore);
            max1score = Math.max.apply(Math, teamscore);
            console.log("max1score", max1score);
            max1index = (teamscore.indexOf(max1score)) + 1;
            console.log("Player-" + max1index + "");
            //console.log("arr", teamscore);
            console.log("team1score", team1score);
            for (var j = 0; j < 10; j++) {
                teamscore.shift();
            }
        }
        no_of_player = 11;
        no_of_balls = 1;
        balls = no_of_balls % 6;
        div1 = document.getElementById("divTableRow" + no_of_player + "");
    }
    console.log("balls", balls, "no_of_balls", no_of_balls);
    //randomly generating number and considering this number as array index which contains the respective score in this match
    var runs_scored = Math.floor(Math.random() * 5);
    //console.log(runs_scored);
    //console.log("balls", balls);
    if ((balls < 7) && (runs_scored !== 0) && (no_of_player <= 20)) {
        var div4 = document.createElement("div");
        div4.setAttribute("class", "divTableCell text-center pt-2");
        div4.innerHTML = "" + runs[runs_scored] + "";
        if ((runs[runs_scored] === 4) || (runs[runs_scored] === 6)) {
            div4.setAttribute("class", "divTableCell bg-primary text-white text-center pt-2");
        }
        //total_single_player=total_single_player+runs[runs_scored];
        output.push(runs[runs_scored]);
        //console.log("total_single_player", total_single_player);
        div1.appendChild(div4);
    }
    else {
        if (no_of_player <= 20) {
            if (balls === 0) {
                balls = 6;
            }
            for (var i = balls; i < 7; i++) {
                var div5 = document.createElement("div");
                div5.setAttribute("class", "divTableCell text-center pt-2");
                div5.innerHTML = "0";
                if (i === balls) {
                    div5.setAttribute("class", "divTableCell bg-danger text-white text-center pt-2");
                }
                div1.appendChild(div5);
                output.push(runs[runs_scored]);
                //total_single_player=total_single_player+runs[runs_scored];
                //console.log("total_single_player", total_single_player);
            }
        }
        no_of_balls = no_of_balls + (6 - balls);
        balls = 6;
        //console.log(balls);
    }
    if (((balls === 6) || (balls === 0)) && (no_of_player <= 20)) {
        total_single_player = 0;
        var div6 = document.createElement("div");
        div6.setAttribute("class", "divTableCell bg-success text-white text-center pt-2");
        for (var i = 0; i < 6; i++) {
            total_single_player = total_single_player + output[i];
        }
        teamscore.push(total_single_player);
        console.log(teamscore);
        div6.innerHTML = "" + total_single_player + "";
        div1.appendChild(div6);
        //console.log("total_single_player", total_single_player);
        for (var i = 0; i < 6; i++) {
            output.shift();
        }
        //console.log("output", output);
    }
    if (((balls === 6) || (balls === 0)) && (no_of_player > 9)) {
        //(document.getElementById("button-2") as HTMLButtonElement).disabled = true;
        document.getElementById("button-1").disabled = true;
    }
    if (((balls === 6) || (balls === 0)) && (no_of_player > 19)) {
        document.getElementById("button-2").disabled = true;
        document.getElementById("button-1").disabled = true;
    }
    no_of_balls++;
    //console.log(no_of_balls);
}
function result() {
    if ((count === 2) && (change === 1)) {
        //total of the single player is calculated
        var total_single_player = void 0;
        balls = no_of_balls % 6;
        console.log("balls", balls, "no_of_balls", no_of_balls);
        //updating the table-1 if all the players from team-1 hasnt played
        if ((balls < 7) && (balls > 1) && (change === 1)) {
            var div1 = document.getElementById("divTableRow" + no_of_player + "");
            if (balls === 0) {
                balls = 6;
            }
            for (var i = balls; i < 7; i++) {
                var div5 = document.createElement("div");
                div5.setAttribute("class", "divTableCell bg-warning text-center pt-2");
                div5.innerHTML = "0";
                div1.appendChild(div5);
                output.push(0);
                //total_single_player=total_single_player+runs[runs_scored];
                //console.log("total_single_player", total_single_player);
            }
            total_single_player = 0;
            var div6 = document.createElement("div");
            div6.setAttribute("class", "divTableCell bg-success text-white text-center pt-2");
            for (var i = 0; i < 6; i++) {
                total_single_player = total_single_player + output[i];
            }
            teamscore.push(total_single_player);
            console.log(teamscore);
            div6.innerHTML = "" + total_single_player + "";
            div1.appendChild(div6);
            //console.log("total_single_player", total_single_player);
            for (var i = 0; i < 6; i++) {
                output.shift();
            }
        }
        for (var i = 0; i < teamscore.length; i++) {
            team2score = team2score + teamscore[i];
        }
        //max(teamscore);
        max2score = Math.max.apply(Math, teamscore);
        console.log("max2score", max2score);
        max2index = (teamscore.indexOf(max2score)) + 1;
        console.log("Player-" + max2index + "");
        console.log("team2score", team2score);
        for (var j = 0; j < 10; j++) {
            teamscore.shift();
        }
    }
    var score1 = document.getElementById("team1");
    score1.value = "" + team1score + "";
    var score2 = document.getElementById("team2");
    score2.value = "" + team2score + "";
    if (team1score > team2score) {
        score1.setAttribute("class", "bg-warning text-center");
        var won = document.getElementById("won");
        won.value = "TEAM1";
        var player = document.getElementById("player");
        player.value = "Player-" + max1index + "";
        var team = document.getElementById("team");
        team.value = "TEAM1";
        var score = document.getElementById("score");
        score.value = "Score:" + max1score + "";
    }
    else {
        score2.setAttribute("class", "bg-warning text-center");
        var won = document.getElementById("won");
        won.value = "TEAM2";
        var player = document.getElementById("player");
        player.value = "Player-" + max2index + "";
        var team = document.getElementById("team");
        team.value = "TEAM2";
        var score = document.getElementById("score");
        score.value = "Score:" + max2score + "";
    }
}
function decrement() {
    if (document.getElementById) {
        var seconds = document.getElementById("seconds");
        //console.log(secs);
        seconds.value = "" + secs + "";
        //if seconds becomes zero, move to the other countdown and at last execute the generate button
        if (count === 0) {
            document.getElementById("button-2").style.opacity = "0.6";
            document.getElementById("button-3").style.opacity = "0.6";
        }
        if (secs < 0) {
            count++;
            if (count === 1) {
                document.getElementById("button-1").style.opacity = "0.6";
                document.getElementById("button-2").disabled = false;
                document.getElementById("button-1").disabled = true;
                document.getElementById("button-2").style.opacity = "1";
                secs = 60;
                click = 1;
                timer();
            }
            if (count == 2) {
                document.getElementById("button-2").disabled = true;
                document.getElementById("button-1").disabled = true;
                document.getElementById("button-3").disabled = false;
                document.getElementById("button-3").style.opacity = "1";
                document.getElementById("button-2").style.opacity = "0.6";
                alert("both done");
            }
        }
        //if seconds > 0 then seconds is decremented 
        else {
            secs--;
            setTimeout('decrement()', 1000);
        }
    }
}
