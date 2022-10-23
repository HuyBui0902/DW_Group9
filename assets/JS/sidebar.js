const button_bar = document.querySelector('.js-bars')
const button_close = document.querySelector('.js-nav-close')
const menu_nav = document.querySelector('.js-nav-mobile')
const overlay = document.querySelector('.js-nav-overlay')
const phone_lgin = document.querySelector('.js-phone-lgin')
const phone_lgout = document.querySelector('.js-phone-lgout')
function showSidebars(){
    menu_nav.classList.add('open')
    overlay.classList.add('open')


}
function hideSidebars(){
    menu_nav.classList.remove('open')
    overlay.classList.remove('open')
    

}
button_bar.addEventListener('click', showSidebars)
button_close.addEventListener('click', hideSidebars)
overlay.addEventListener('click',hideSidebars)
phone_lgin.addEventListener('click',hideSidebars)
phone_lgout.addEventListener('click',hideSidebars)


function myFunction() {
    var x = document.getElementById("js-sub");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function closeFunction(){
    var c = document.getElementById("js-sub");
    if (c.style.display === "block") 
        c.style.display = "none";
}