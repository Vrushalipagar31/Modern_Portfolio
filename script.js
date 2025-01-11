const nxtBtn = document.getElementById('nxt-btn');
const prevBtn = document.getElementById('prev-btn');
const slide = document.querySelector('.wrapper');

const items = document.querySelectorAll('.item');
let index = 0;

const itemWidth = items[0].clientWidth + parseInt(getComputedStyle(items[0]).marginRight);

const moveToNextSlide = () => {
    if (index >= items.length - 1) return;
    index++;
    slide.style.transform = `translateX(${-itemWidth * index}px)`;
};

const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-itemWidth * index}px)`;
};

nxtBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);
