var parents = document.querySelectorAll('.itemcard__rating-list');

parents.forEach(function(parent) {
    var rating = parent.getAttribute('data-rating');

    for (var i = 0; i < rating; i++) {
        var item = document.createElement('li');
        item.className = 'itemcard__rating-item';
        parent.appendChild(item);
    }
});