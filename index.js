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
document.addEventListener('scroll', function() {
    const navContainer = document.querySelector('.first-banner-section');
    navContainer.style.backgroundColor = 'white';
    navContainer.style.boxShadow = '10px 10px 100px #00000054';
    if(scrollY <= 100) {
        navContainer.style.background = 'none';
        navContainer.style.boxShadow = 'none';
    }
    // console.log(scrollY);
    // scrollY = 2000
})
function closeNavMobile() {
    // console.log(navigation.offsetTop);
    this.style.display = 'none';
    mobileNavButton.style.display = 'flex';
    // bg nav dan nav hilang
    bgNavMobile.style.display = 'none';
    navigation.style.display = 'none';
}

function openNavMobile() {
    // console.log(navigation.offsetTop);
    this.style.display = 'none';
    closeNavButton.style.display = 'block';
    // bg nav dan nav muncul
    bgNavMobile.style.display = 'block';
    navigation.style.display = 'flex';
}