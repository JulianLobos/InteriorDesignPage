$("#hamburgerBtn").click(function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
});

const mq = window.matchMedia( "(max-width: 798px)" );

if (mq.matches) {
    $(".menuItemOpt").click(function() {
        $("#hamburgerBtn").toggleClass("on");
        $("#menu").slideToggle();
    });
}

// smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });