const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const itemWidth = items[0].getBoundingClientRect().width;

// Clone les premiers et derniers éléments pour la boucle fluide
const firstItemClone = items[0].cloneNode(true);
const lastItemClone = items[items.length - 1].cloneNode(true);
track.appendChild(firstItemClone);
track.insertBefore(lastItemClone, items[0]);

function moveToSlide(index) {
    track.style.transform = 'translateX(-' + index * itemWidth + 'px)';
}

function nextSlide() {
    const totalItems = items.length;
    currentIndex = (currentIndex + 1) % (totalItems + 2); // +2 pour les clones
    moveToSlide(currentIndex);
    if (currentIndex === totalItems) {
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(0)';
            currentIndex = 0;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-in-out';
            }, 0);
        }, 500);
    }
}

let currentIndex = 0;
setInterval(nextSlide, 5000); 
