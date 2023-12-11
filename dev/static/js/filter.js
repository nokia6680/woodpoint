var filters = ['top10', 'top25', 'top50', 'top100'];

document.getElementById('top10').addEventListener('click', function () {
    filterWines(1, 10);
    setActiveFilter('top10');
});

document.getElementById('top25').addEventListener('click', function () {
    filterWines(11, 25);
    setActiveFilter('top25');
});

document.getElementById('top50').addEventListener('click', function () {
    filterWines(26, 50);
    setActiveFilter('top50');
});

document.getElementById('top100').addEventListener('click', function () {
    filterWines(51, 100);
    setActiveFilter('top100');
});

function filterWines(start, end) {
    // Get all wine elements
    var wines = document.getElementsByClassName('wine');

    // Loop through all wine elements
    for (var i = 0; i < wines.length; i++) {
        var wine = wines[i];
        var rank = parseInt(wine.getAttribute('data-rank'));

        // If the wine's rank is within the range, show it. Otherwise, hide it.
        if (rank >= start && rank <= end) {
            wine.style.display = '';
        } else {
            wine.style.display = 'none';
        }
    }
}

function setActiveFilter(activeId) {
    for (var i = 0; i < filters.length; i++) {
        var filter = document.getElementById(filters[i]);

        if (filters[i] === activeId) {
            filter.classList.add('is-active');
        } else {
            filter.classList.remove('is-active');
        }
    }
}