// memunculkan navigasi di mobile ketika navigasi diklik
const mobileNavButton = document.querySelector('.nav-mobile');
const closeNavButton = document.querySelector('.close-nav-mobile');
const firstStripe = document.querySelector('.stripe-1');
const secondStripe = document.querySelector('.stripe-2');
const thirdStripe = document.querySelector('.stripe-3');
const bgNavMobile = document.querySelector('.nav-mobile-background');
const navigation = document.querySelector('.navigation');

mobileNavButton.addEventListener('click', openNavMobile);
// event binding untuk close navigation 
closeNavButton.addEventListener('click', closeNavMobile)

function closeNavMobile() {
    console.log('haha');
    this.style.display = 'none';
    mobileNavButton.style.display = 'flex';
    // bg nav dan nav hilang
    bgNavMobile.style.display = 'none';
    navigation.style.display = 'none';
}

function openNavMobile() {
    this.style.display = 'none';
    closeNavButton.style.display = 'block';
    // bg nav dan nav muncul
    bgNavMobile.style.display = 'block';
    navigation.style.display = 'flex';
}