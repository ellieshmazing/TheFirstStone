$(document).ready(function(){
    $(".judgement").click(function(){
        $(this).animate({
            width: '11.5vw',
            height: '11.5vh',
            margin: '3.75vw',
            'border-radius': '4.75vh',
        }, 40);
        $(this).animate({
            width: '12vw',
            height: '12vh',
            margin: '3.5vw',
            'border-radius': '4.5vh',
        }, 40);
    });
});