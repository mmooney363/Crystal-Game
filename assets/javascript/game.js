

var randomResult;
var wins = 0;
var losses = 0;
var last = 0;

var reset = function () {
    $(".allCrystals").empty();
    var images = [
        'https://png.pngtree.com/png_detail/18/09/10/pngtree-purple-crystal-png-clipart_2626612.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71GADww3MwL._SX425_.jpg',
        'https://beadage.net/wp-content/uploads/2015/04/quartz-300x300.jpg',
        'https://ae01.alicdn.com/kf/HTB1qMDtdGQoBKNjSZJnq6yw9VXaS/145g-natural-red-quartz-cluster-beautiful-red-aura-angel-crystal-cluster-reiki-Titanium-coating-cluster-healing.jpg_640x640.jpg',];
    random_Result = Math.floor(Math.random() * 60 ) + 30;
    $("#result").html('Target Number: ' + random_Result);
    for (var i = 0; i < 4; i++){
         
        var ranValue = Math.floor(Math.random() * 11) + 1;
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "selected-number": ranValue
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });
        $(".allCrystals").append(crystal);
    }
    $("#last").html("Current Points: " + last);
}

reset();


$(document).on('click', ".crystal", function () {

   

    var num = parseInt($(this).attr('selected-number'));

    last += num;

    $("#last").html("Current Points: " + last);

    if(last > random_Result){
        losses++;
        $("#losses").html("Losses: " + losses);
        last = 0;
        reset();
    }
    else if(last === random_Result){
        wins++;
        $("#wins").html("Wins: " + wins);
        last = 0;
        reset();
    }
    
    console.log(last);
 
});