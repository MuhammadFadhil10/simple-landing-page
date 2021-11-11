// memunculkan navigasi di mobile ketika navigasi diklik
const mobileNavButton = document.querySelector('.nav-mobile');
mobileNavButton.addEventListener('click', openNavMobile);
alert('haha')

function openNavMobile() {
    const firstStripe = document.querySelector('.stripe-1');
    const secondStripe = document.querySelector('.stripe-2');
    const thirdStripe = document.querySelector('.stripe-3');
    this.classList.toggle('close-nav-mobile')
    console.log(this);
    firstStripe.style.opacity = '0';
    secondStripe.style.transform = 'rotate(-50deg)';
    secondStripe.style.marginTop = '1.2rem';
    secondStripe.style.height = '60px';
    thirdStripe.style.transform = 'rotate(50deg)';
    thirdStripe.style.height = '60px';
    // this.firstElementChild.style.display = 'none';
}