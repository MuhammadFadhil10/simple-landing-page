alert('haha')
// memunculkan navigasi di mobile ketika navigasi diklik
const mobileNavButton = document.querySelector('.nav-mobile');
mobileNavButton.addEventListener('click', openNavMobile);

function openNavMobile() {
    const thirdStripe = document.querySelector('.stripe-3');
    this.classList.toggle('close-nav-mobile')
    console.log(this);
    this.firstElementChild.style.opacity = '0';
    this.firstElementChild.nextElementSibling.style.transform = 'rotate(-50deg)';
    this.firstElementChild.nextElementSibling.style.marginTop = '1.2rem';
    this.firstElementChild.nextElementSibling.style.height = '30px';
    thirdStripe.style.marginTop = '1px';
    setTimeout(function () {
        thirdStripe.style.marginBottom = '3px';
        thirdStripe.style.transform = 'rotate(50deg)';
        thirdStripe.style.height = '30px';
    },1000)
    // this.firstElementChild.style.display = 'none';
}