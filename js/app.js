import '../js/jquery-3.5.1.js';

//efectos:
// navbar
$('.navbar a').each(function(index, element){
  $(this).css({'top': '-200px'});
  $(this).animate({'top': 0}, 1000 + (index * 500));
});

//texto header
if($(window).width() > 768 ){
  $('header .textos').css({
    opacity: 0,
    marginTop: '50px'
  });
  $('header .textos').animate({
    opacity: 1,
    marginTop: '0'
  }, 1500)
}

//parallax

$(window).scroll(function(){
  let width = $(this).width();
  if(width > 992 ){
    let offsetY = $(this).scrollTop();
    $('header .textos').css({
      transform: `translateY(${-50 + offsetY / 2}%)`,
    });
    $('.acerca-de article').css({
      transform: `translateY(-${offsetY / 4}%)`,
    })
  }
})

$(window).resize(function(){
  let width = $(this).width();
  if(width < 568 ){
    $('.acerca-de article').css({
      transform: `translateY(0)`,
    })
  }
});
// console.log($('#galeria').offset().top) /la posicion del elemento