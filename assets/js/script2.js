var slideContainer = document.querySelector('.slides');
var slides = document.querySelectorAll('.slide');
var navegacao = document.querySelectorAll('.navegacao a');
var proximo = document.querySelector('.proximo');


function pegaDataNav(){
    for(var i = 0; i < navegacao.length; i++){
        var myNav = parseInt(navegacao[i].getAttribute('data-nav'));
        console.log(myNav);
        
        for(var i = 0; i < slides.length; i++){
            var mySlide = parseInt(slides[i].getAttribute('data-slide'));
            if(mySlide === myNav){
                slides[i].classList.add('item-active');
            }
}
}
function pegaDataSlide(){
    console.log(mySlide);
}
}
proximo.addEventListener('click', function(){
    pegaDataNav();
})