// Склонение дней
let counterElements = document.querySelectorAll('.rating__upper-counter');
let daysElements = document.querySelectorAll('.timeRefDays');

counterElements.forEach(function(counterElement, index) {
    let counter = parseInt(counterElement.textContent);
    let lastDigit = counter % 10;
    let lastTwoDigits = counter % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        daysElements[index].textContent = 'день';
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        daysElements[index].textContent = 'дня';
    } else {
        daysElements[index].textContent = 'дней';
    }
});

// Изменение цвета в зависимости от значения
let numberElements = document.querySelectorAll('.rating__days');

numberElements.forEach(function(numberElement) {
    let number = parseInt(numberElement.textContent);

    if (number > 1000) {
        numberElement.classList.add('darker');
    } else if (number > 500) {
        numberElement.classList.add('dark');
    }
});

// Открытие тултипов по клику на элемент рейтинга

let ratingItems = document.querySelectorAll('.rating__item');
let ratingTools = document.querySelectorAll('.rating__tool');
let closeButtons = document.querySelectorAll('.rating__tool-close');

ratingItems.forEach(function(ratingItem) {
    ratingItem.addEventListener('click', function(event) {
        event.stopPropagation();

        ratingTools.forEach(function(ratingTool) {
            ratingTool.classList.remove('active');
        });

        let ratingTool = ratingItem.querySelector('.rating__tool');
        if (ratingTool) {
            ratingTool.classList.add('active');
        }
    });
});

closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation();

        var ratingTool = closeButton.closest('.rating__tool');
        if (ratingTool) {
            ratingTool.classList.remove('active');
        }
    });
});

document.addEventListener('click', function() {
    ratingTools.forEach(function(ratingTool) {
        ratingTool.classList.remove('active');
    });
});


$('.rating__expand').on('click', function () {
    $(this).toggleClass('active');
    $('.rating__bottom').toggleClass('active');
    $('.rating__upper').toggleClass('active');
});