// memunculkan navigasi di mobile ketika navigasi diklik
const mobileNavButton = document.querySelector('.nav-mobile');
const firstStripe = document.querySelector('.stripe-1');
const secondStripe = document.querySelector('.stripe-2');
const thirdStripe = document.querySelector('.stripe-3');

mobileNavButton.addEventListener('click', openNavMobile);
const closeNavButton = document.querySelector('.close-nav-mobile');
// event binding untuk close navigation 
document.addEventListener('click', function (e) {
    if(e.target.classList.contains === 'close-nav-mobile') {
        this.addEventListener('click', closeNavMobile)
    }
});

function closeNavMobile() {
    console.log('tutup');
}

function openNavMobile() {
   console.log('buka');
}