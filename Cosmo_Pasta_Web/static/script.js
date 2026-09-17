const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.dish');

function showCategory(category) {
    cards.forEach(card => {
        card.style.display = card.dataset.category === String(category) ? '' : 'none';
    });
}

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filters.forEach(x => x.classList.remove('active'));
        filter.classList.add('active');
        showCategory(filter.dataset.category);
    });
});

if (filters.length) showCategory(0);

document.querySelector('.hamb')?.addEventListener('click', () => {
    document.querySelector('.nav nav')?.classList.toggle('mobile-open');
});
