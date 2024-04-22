var type = new Typed('.typing-text', {
  strings: ['a Tech-Enthusiast!', 'an Aspiring Entrepreneur!', 'a Computer Science Student!'],
  typeSpeed: 100,
  loop: true
});

$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }
  });
  
  //smooth scroll
  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      1000, 
      'linear'
    );

  });
});

AOS.init({
  duration: 1000,
  once: true,
});



function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("anim");
    }
    else {
      reveals[i].classList.remove("anim");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();



function opentab(tabname){
    for (let tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for (let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");

}

