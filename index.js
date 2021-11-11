// memunculkan navigasi di mobile ketika navigasi diklik
const mobileNavButton = document.querySelector('.nav-mobile');
const firstStripe = document.querySelector('.stripe-1');
const secondStripe = document.querySelector('.stripe-2');
const thirdStripe = document.querySelector('.stripe-3');

mobileNavButton.addEventListener('click', openNavMobile);
// event binding untuk close navigation 
document.addEventListener('click', function (e) {
    console.log(e.target);
    if(e.target.classList.contains('close-nav-mobile')) {
        // console.log(this);
        // e.target.addEventListener('click', closeNavMobile)
        const closeNavButton = document.querySelector('.close-nav-mobile');
        closeNavButton.addEventListener('click', closeNavMobile)
        // closeNavMobile()
        mobileNavButton.removeEventListener('click', openNavMobile)
    }
});

function closeNavMobile() {
    alert('haha')
    secondStripe.style.backgroundColor = 'red';
}

function openNavMobile() {
    console.log(this);
    firstStripe.style.opacity = '0';
    secondStripe.style.transform = 'rotate(-50deg)';
    secondStripe.style.marginTop = '1.2rem';
    secondStripe.style.height = '60px';
    thirdStripe.style.transform = 'rotate(50deg)';
    thirdStripe.style.height = '60px';
    mobileNavButton.classList.add('close-nav-mobile');
    // openNavMobile.remove
}