// memunculkan navigasi di mobile ketika navigasi diklik
const mobileNavButton = document.querySelector('.nav-mobile');
const closeNavButton = document.querySelector('.close-nav-mobile');
const firstStripe = document.querySelector('.stripe-1');
const secondStripe = document.querySelector('.stripe-2');
const thirdStripe = document.querySelector('.stripe-3');
const bgNavMobile = document.querySelector('.nav-mobile-background');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.nav-list');

mobileNavButton.addEventListener('click', openNavMobile);
closeNavButton.addEventListener('click', closeNavMobile)
// event binding untuk close navigation 
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

navLink.forEach((el, i) => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        // e.target.style.borderBottom = '2px solid #332c8b';
        // if(el !== e.target) {

        //     el.style.borderBottom = '2px solid white';
        // }
        
    })
    
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