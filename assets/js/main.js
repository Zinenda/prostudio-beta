/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("side-nav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("side-nav").style.width = "0%";
}

$( document ).ready(function(){
    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.slider').slider({full_width: true});
    $('.materialboxed').materialbox();
    $('.carousel').carousel();
    $('.modal-trigger').leanModal();
});