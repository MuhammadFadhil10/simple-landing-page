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
        closeNavButton.style.display = 'none';
        mobileNavButton.style.display = 'flex';
        // bg nav dan nav hilang
        bgNavMobile.style.display = 'none';
        if (innerWidth <= 500) {
            navigation.style.display = 'none';
        }
        console.log(innerWidth);
        // e.target.style.borderBottom = '2px solid #332c8b';
        // if(el !== e.target) {

        //     el.style.borderBottom = '2px solid white';
        // }
        
    })
    
})





function closeNavMobile() {
    // console.log(navigation.offsetTop);
    closeNavButton.style.display = 'none';
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

// function untuk hitung mundur disscount
function discountTimer() {
    
    let timing = setInterval(() => {
        // perhitungan waktu
        const today = new Date().getTime();
        const deadLine = new Date('11-18-2021-23:11:00').getTime();
        const marginTime = deadLine - today;
        const marginDay = Math.floor(marginTime / (1000 * 60 * 60 * 24));
        const marginHours = Math.floor(marginTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const marginMinute = Math.floor(marginTime % (1000 * 60 * 60 ) / (1000 * 60));
        const marginSeconds = Math.floor(marginTime % (1000 * 60 ) / (1000));
        console.log(marginHours)
        // memanipulasi halaman diskon html 
        const day = document.querySelector('.timer-day');
        const hours = document.querySelector('.timer-hour');
        const minute = document.querySelector('.timer-minute');
        const seconds = document.querySelector('.timer-second');
        day.innerText = marginDay;
        hours.innerText = marginHours;
        minute.innerText = marginMinute;
        seconds.innerText = marginSeconds;
        if(
            day.textContent <= '0' &&
            hours.textContent <= '0' &&
            minute.textContent <= '0' &&
            seconds.textContent <= '0'
            
        ) {
            clearInterval(timing);
            day.innerText = 0;
            hours.innerText = 0;
            minute.innerText = 0;
            seconds.innerText = 0;
        }
    }, 1000);
}
discountTimer();