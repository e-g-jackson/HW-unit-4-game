//character variables defined
var batman = {name: "batman", life: 150, attack: 5, img: "assets/images/batman.jpg"};
var nightwing = {name: "nightwing", life: 100, attack: 5, img: "assets/images/nightwing.jpg"};
var catwoman = {name: "catwoman", life: 130, attack: 10, img: "assets/images/catwoman.jpg"};
var joker = {name: "joker", life: 170, attack: 25, img: "assets/images/joker.jpeg"};
//char Array
var char = [batman, nightwing, catwoman, joker];
var gDiv = document.getElementById("gameDiv");
var def = 0;
var att = 0;
var btn = 0;
var numChar = char.length;
console.log("variables defined");

var combatDiv = $('<div></div>');
    $(combatDiv).attr('id' , 'combatDiv');
    $(gDiv).before(combatDiv);
var defDiv = $('<div></div>');
    $(defDiv).attr('id', 'defDiv');
    $(defDiv).html('<h2 class=\'combatText\'>Defender</h2>');
    $(defDiv).appendTo(combatDiv);
var attDiv = $('<div></div>');
    $(attDiv).attr('id', 'attDiv');
    $(attDiv).html('<h2 class=\'combatText\'>Attacker</h2>')
    $(attDiv).appendTo(combatDiv);

for ( let i = 0; i < char.length; i++){
    var charImg = $('<img>');
        $(charImg).attr('id', char[i].name);
        $(charImg).attr('src', char[i].img);
        $(charImg).attr('class', 'charImg');
        $(charImg).attr('character', char[i].name)

    var charDiv = $('<div></div>');
        $(charDiv).attr('id', char[i].name + "_div");
        $(charDiv).append(charImg);
        $(charDiv).appendTo(gDiv);
            
    console.log(char[i].name + " loaded!");

// end of for loop
}

//creates attack button
var buttonSpawn = function(){
    if ( att === 1 && def === 1 && btn === 0){
        console.log('buttonSpawn');
        var attButton = $('<button></button>');
            $(attButton).attr("id", "attButton");
            $(attButton).attr("class", "button btn-lg btn-danger");
            $(attButton).attr("style", "font-size:60px;")
            $(attButton).html("Attack!");
            $(defDiv).after(attButton);
            btn = 1;
        }
};

var winCondition = function(){
    };

//attack button functionality
$('body').on('click', '#attButton', function(){
    console.log('Attack Button Pressed!');
    var defName = $('.defender').attr('character');
    var attName = $('.attacker').attr('character');
    var defender = eval(defName);
    var attacker = eval(attName);
    var attDif = function (){
        var difference = attacker.life - defender.attack;
        return difference;
    };
    var defDif = function (){
        var difference = defender.life - attacker.attack;
        return difference;
    };
    var defBoost = function(){
        var Boost = defender.attack + 5;
        return Boost;
    };
    $(attacker).prop('life', attDif());
    $(defender).prop('life', defDif());
    $(defender).prop('attack', defBoost());
    var defCharInfo = $('#defCharInfo')
        defCharInfo.empty();
        $(defCharInfo).html("Name: " + defender.name + "<br>Life:" + defender.life +"<br>Attack:" + defender.attack);
    var attCharInfo = $('#attCharInfo')
        attCharInfo.empty();
        $(attCharInfo).html("Name: " + attacker.name + "<br>Life:" + attacker.life +"<br>Attack:" + attacker.attack);
    console.log(defender.life);
    console.log(attacker.life);
    if ( defender.life <= 0 ){
        alert('You lose!')
    }
    else if( numChar == 1 && attacker.life <= 0 ){
        alert('You Win the Game!')
    }
    else if ( attacker.life <= 0 ){
        alert('You Win! Pick another opponent!')
        $('#attDiv').empty();
        $(attDiv).html('<h2 class = \"combatText\">Attacker</h2>')
        numChar--;
        console.log(numChar)
        att = 0;
    }
});

//onclick for distributing images
$('.charImg').on("click", function(){
    var picId = $(this).attr('id');
    var picStr = ( '"#' + picId + '_div"' );
        if( def === 0 ){
            def++;
            $(this).removeClass('charImg');
            $(this).attr('class', 'combatant defender rounded-circle');
            $(this).detach().appendTo('#defDiv');
            var ID = eval(picId);
            var defCharInfo = $('<div></div>')
                $(defCharInfo).attr('id', 'defCharInfo')
                $(defCharInfo).attr('class', 'charInformation alert');
                $(defCharInfo).html("Name: " + ID.name + "<br>Life:" + ID.life +"<br>Attack:" + ID.attack);
                $(defCharInfo).appendTo('#defDiv');
            console.log('There is now a defender!');
        }
        else if( def === 1 && att === 0){
            att++;
            $(this).removeClass('charImg');
            $(this).attr('class', 'combatant attacker rounded-circle');
            $(this).detach().appendTo('#attDiv');
            var ID = eval(picId);
            var attCharInfo = $('<div></div>')
                $(attCharInfo).attr('id', 'attCharInfo')
                $(attCharInfo).attr('class', 'charInformation alert');
                $(attCharInfo).html("Name: " + ID.name + "<br>Life:" + ID.life +"<br>Attack:" + ID.attack);
                $(attCharInfo).appendTo('#attDiv');
            console.log('There is now an attacker!');
            window.setTimeout(buttonSpawn(), 250)
        }
        else if ( def === 1 && att === 1){
            alert('There is already an Attacker and a Defender!');
            console.log('No more room!');
            
        }
    console.log(picStr);
});