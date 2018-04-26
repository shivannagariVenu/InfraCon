/**
 * Created by venu on 10/9/2015.
 */
$(window).load(function () {
    $('.ppl-products').addClass('magictime swashIn');
    $('.ppl-logo-small').addClass('magictime swap');
    //$('.footer-menu .menu-footer').addClass('magictime perspectiveUpRetourn');

    $('.left-top').addClass('magictime openUpLeftRetourn');
    $('.left-down').addClass('magictime openDownLeftRetourn');
    $('.right-top').addClass('magictime openUpRightRetourn');
    $('.rigth-down').addClass('magictime openDownRightRetourn');

    $('.ppl-prj-btns .btn-ongoing-projects').addClass('magictime spaceInUp');
    $('.ppl-prj-btns .btn-upcoming-projects').addClass('magictime spaceInDown');
    $('.ppl-media-img').addClass('magictime vanishIn');


    setTimeout(function(){

    }, 1000);

});
$(document).ready(function () {
    function fitInto(){
        var windowHeight = $(window).height();
        var mainMenuHeight = $(".content").height();
        var footerHeight = $(".footer").height();

        var mainDivHeigtht = (windowHeight - (mainMenuHeight + footerHeight));
        $(".ppl-banner").css(
            {
                "height": mainDivHeigtht
            }
        );
        $(".ppl-container").css(
            {
                "height": mainDivHeigtht,
            }
        );
    }
    fitInto();
    // Bind to the resize event of the window object
    //$(window).on("resize", function () {
    //    fitInto();
    //}).resize();


    function changeText(cont1,cont2,speed){
        var Otext=cont1.text();
        var Ocontent=Otext.split("");
        var i=0;
        function show(){
            if(i<Ocontent.length)
            {
                cont2.append(Ocontent[i]);
                i=i+1;
            };
        };
        var Otimer=setInterval(show,speed);
    };
    $(document).ready(function(){
        changeText($(".ppl-products .p1"),$(".ppl-products .p2"),25);
        clearInterval(Otimer);
    });
});
