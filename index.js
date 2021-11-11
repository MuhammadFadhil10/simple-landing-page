// memunculkan navigasi di mobile ketika navigasi diklik
const mobileNavButton = document.querySelector('.nav-mobile');
const closeNavButton = document.querySelector('.close-nav-mobile');
const firstStripe = document.querySelector('.stripe-1');
const secondStripe = document.querySelector('.stripe-2');
const thirdStripe = document.querySelector('.stripe-3');

mobileNavButton.addEventListener('click', openNavMobile);
// event binding untuk close navigation 
closeNavButton.addEventListener('click', closeNavMobile)

function closeNavMobile() {
    console.log('haha');
    this.style.display = 'none';
    mobileNavButton.style.display = 'block';
}

function openNavMobile() {
   this.style.display = 'none';
   closeNavButton.style.display = 'block';
}