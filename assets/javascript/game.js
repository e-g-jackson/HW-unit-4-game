//character variables defined
var batman = {name: "batman", life: 100, attack: 25, img: "assets/images/batman.jpg"};
var nightwing = {name: "nightwing", life: 100, attack: 25, img: "assets/images/nightwing.jpg"};
var catwoman = {name: "catwoman", life: 100, attack: 25, img: "assets/images/catwoman.jpg"};
var joker = {name: "joker", life: 100, attack: 25, img: "assets/images/joker.jpeg"};
//char Array
var char = [batman, nightwing, catwoman, joker];
var gDiv = document.getElementById("gameDiv");
var def = 0;
var att = 0;
console.log("variables defined");

var defDiv = $('<div></div>');
    $(defDiv).attr('id', 'defDiv');
    $(defDiv).html('<h2>Defender</h2>');
    $(gDiv).before(defDiv);
var attDiv = $('<div></div>');
    $(attDiv).attr('id', 'attDiv');
    $(attDiv).html('<h2>Attacker</h2>')
    $(gDiv).after(attDiv);

for ( let i = 0; i < char.length; i++){
    var charImg = $('<img>');
        $(charImg).attr('id', char[i].name);
        $(charImg).attr('src', char[i].img);
        $(charImg).attr('class', 'charImg');

    var charDiv = $('<div></div>');
        $(charDiv).attr('id', char[i].name + "_div");
        $(charDiv).append(charImg);
        $(charDiv).appendTo(gDiv);
            
    console.log(char[i].name + " loaded!");

// end of for loop
}

$(document.getElementsByClassName('charImg')).on("click", function(){
    var picId = $(this).attr('id');
    var picStr = ( '"#' + picId + '_div"' );
        if( def === 0 ){
            def++;
            $(this).detach().appendTo('#defDiv');
            console.log('There is now a defender!');
        }
        else if( def === 1 && att === 0){
            att++;
            $(this).detach().appendTo('#attDiv');
            console.log('There is now an attacker!');
        }
        else if ( def === 1 && att === 1){
            alert('There is already an Attacker and a Defender!');
            console.log('No more room!');
        }
    console.log(picStr);
    });

// function to tell if there's an defender yet
//on click call defender function and move accordingly

// function mover(){
//     var picId = $(this).attr('id');
//     var picStr = ( '"#' + picId + '_div"' )
//     var pic = document.getElementById( '"#' + picId + '_div"' );
//         if( def == 0 ){
//             var def = 1;
//             $(pic).detatch();
//             $(defDiv).append(pic);
//             console.log('There is now a defender!')
//         }
//         else if( def == 1 && att == 0){
//             var att = 1;
//             $(pic).detatch().appendTo(attDiv)
//             console.log('There is now an attacker!')
//         }
//         else if ( def == 1 && att == 1){
//             alert('There is already an Attacker and a Defender!')
//             console.log('No more room!')
//         }
//     console.log(picStr);

// };