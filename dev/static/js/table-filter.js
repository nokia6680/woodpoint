let filterOpener = document.querySelector('.js-filter-open');
let filter = document.querySelector('.options');
let body = document.querySelector('.body');
let filterCloser = document.querySelector('.options__closer');

filterOpener.addEventListener("click", function() {
    filter.classList.add('is-active');
    body.classList.add('.no-scroll');
});

filterCloser.addEventListener("click", function() {
    filter.classList.remove('is-active');
    body.classList.remove('.no-scroll');
});