let songs = [
    { songName: '100 Million', url: './songs/100\ Million\ -\ Karan\ Aujla.mp3', img: './song\ Images/100\ Million.jpg', time: '3:12' },
    { songName: 'Arjan Vailly', url: './songs/Arjan\ Vailly\ -\ Animal.mp3', img: './song\ Images/Arjan\ Vailly.jpg', time: '3:00' },
    { songName: 'Dhandho', url: './songs/Dhandho\ -\ Munawar\ x\ Spectra.mp3', img: './song\ Images/Dhandho.jpg', time: '2:55' },
    { songName: 'DIVINE - 3_59', url: './songs/DIVINE\ -\ 3_59\ AM.mp3', img: './song\ Images/divine\ 3_59.jpg', time: '4:46' },
    { songName: 'Downers At Dusk', url: './songs/Downers\ At\ Dusk\ -\ Talha\ Anjum.mp3', img: './song\ Images/Downers\ at\ dusk.jpg', time: '4:39' },
    { songName: 'Falak Tu Garaj Tu', url: './songs/Falak\ Tu\ Garaj\ Tu\ -\ KGF\ 2.mp3', img: './song\ Images/Falak\ Tu.jpg', time: '2:51' },
    { songName: 'Kahani Suno', url: './songs/Kahani\ Suno\ -\ Kaifi\ Khalil.mp3', img: './song\ Images/Kahani\ Suno.jpg', time: '2:53' },
    { songName: 'Pehle Bhi Main', url: './songs/Pehle\ Bhi\ Main\ -Animal.mp3', img: './song\ Images/Pehli\ bhi\ Main.jpg', time: '4:10' },
    { songName: 'Tu Hai Kahan', url: './songs/Tu\ Hai\ Kahan\ -\ Aur.mp3', img: './song\ Images/Tu\ hai\ Kaha.jpg', time: '4:23' },
    { songName: 'YALGAAR - CARRYMINATI', url: './songs/YALGAAR\ -\ CARRYMINATI\ X\ Wily.mp3', img: './song\ Images/Yalgaar.jpg', time: '3:14' }
];

let songList = document.querySelector('.list');
let currentImg = document.querySelector('.player-img > img');
let back = document.getElementById('back');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let next = document.getElementById('next');
let current;

let audio = new Audio();

function createList() {
    let clutter = '';
    let i = 0;
    songs.forEach((el) => {

        clutter += `<li id='${i}'>
               <img src="${el.img}" alt="${el.songName}">
               <h2>${el.songName}</h2>
               <span>${el.time}</span>
           </li>`;
        i++;
    });

    songList.innerHTML = clutter;
}

createList();

let list = document.querySelectorAll('.list > li');
list.forEach((li) => {
    li.addEventListener('click', () => {
        playAudio(li.id);
        switchOn();
    });
})

let switchOn = () => {
    play.style.display = 'none';
    pause.style.display = 'block';
    audio.play();
}

let playAudio = (pl) => {
    list.forEach((li) => {
        if (!(li.id == pl)) {
            li.classList.remove('current');
        }
    });
    list[pl].classList += 'current';
    audio.src = `${songs[pl].url}`;
    currentImg.src = `${songs[pl].img}`;
}

play.addEventListener('click', switchOn);

pause.addEventListener('click', () => {
    pause.style.display = 'none';
    play.style.display = 'block';
    audio.pause();
});

back.addEventListener('click', () => {
    refresh();

    if (current.id == 0) {
        playAudio(list[list.length - 1].id);
    }
    else {
        playAudio(current.id - 1);
    }

    switchOn();
});

next.addEventListener('click', () => {
    refresh();
    if (current == list[list.length - 1]) {
        playAudio(0);
    }
    else {
        playAudio(Number(current.id) + 1);
    }

    switchOn();
});


playAudio(list[0].id);
audio.volume = 1;

function refresh() {
    current = document.querySelector('.current');
}
refresh();