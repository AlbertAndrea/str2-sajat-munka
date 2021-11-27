let cards = document.querySelectorAll('.card');
let firstClick = false;
let cardPair = [];
let flips = 0;

cards.forEach((card) => {
    card.state = 'unclicked';
});

const schuffle = () => {
    let images = document.querySelectorAll('img');
    let srcs = ['./imagines/kor.png', './imagines/teglalap.png', './imagines/derekszogu.png', './imagines/egyenloszaru.png', './imagines/paralelogramma.png', './imagines/kor.png', './imagines/teglalap.png', './imagines/derekszogu.png', './imagines/egyenloszaru.png', './imagines/paralelogramma.png'];
    for (let i = 0; i < srcs.length; i++) {
        let j = Math.floor(Math.random() * i);
        let temp = srcs[i];
        srcs[i] = srcs[j];
        srcs[j] = temp;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].src = srcs[i];
    }
}

schuffle();

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        if (!firstClick) { time(); }
        firstClick = true;
        if (cards[i].state === 'unclicked') {
            cards[i].style.transform = 'rotateY(180deg)';
            cards[i].state = 'clicked';
            cardPair.push(cards[i]);
            check();
        }
        else if (cards[i].state === 'clicked') {
            cards[i].style.transform = 'rotateY(0deg)';
            cards[i].state = 'unclicked';
            cardPair = [];
        }
    })
}

const check = () => {
    if (cardPair.length === 2) {
        if (cardPair[0].querySelector('img').src === cardPair[1].querySelector('img').src) {
            matched();
        }
        else {
            unmatched(cardPair[0], cardPair[1]);
        }
    }
}

const matched = () => {
    cardPair[0].state = 'blocked';
    cardPair[1].state = 'blocked';
    cardPair = [];
    flips++;
    document.querySelector('#flips').innerHTML = flips;
    if (flips === 5) {
        document.querySelector('#end').innerHTML = 'Gratulálok! Ügyes vagy!';
    }
}

const unmatched = (x, y) => {
    setTimeout(() => {
        x.state = 'unclicked';
        y.state = 'unclicked';
        x.style.transform = 'rotateY(0deg)';
        y.style.transform = 'rotateY(0deg)';
    }, 750)
    cardPair[0].state = 'blocked';
    cardPair[1].state = 'blocked';
    cardPair = [];
}

const time = () => {
    let secs = 0;
    let mins = 0;
    let SS = 0;
    let MM = 0;
    const interval = setInterval(() => {
        secs++
        if (secs == 60) { secs = 0; mins++; }
        secs < 10 ? SS = `0${secs}` : SS = `${secs}`;
        mins < 10 ? MM = `0${mins}` : SS = `${mins}`;
        document.querySelector('#time').innerHTML = `${MM}:${SS}`;
        if (flips === 5) {
            clearInterval(interval);
        }
    }, 1000)
}

const reloadThePage = () => {
    document.getElementById('end').innerHTML = '';
    location.reload();
}


