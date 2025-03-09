const songs = [
    "01. Lemon lime.mp3",
    "02. Chlorophyll.mp3",
    "03. Inflorescence Hotmix.mp3",
    "04. Stargazer.mp3"
];

const songsDropdown = document.getElementById('songsDropdown');
const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');

let currentIndex = 0;

songsDropdown.addEventListener('change', (event) => {
    const selectedSong = event.target.value;
    currentIndex = songs.indexOf(selectedSong);
    displaySongTitle(selectedSong);
    playSong(selectedSong);
});

audioPlayer.addEventListener('ended', () => {
    currentIndex++;
    if (currentIndex < songs.length) {
        displaySongTitle(songs[currentIndex]);
        playSong(songs[currentIndex]);
    } else {
        audioPlayer.src = '';
        songTitle.textContent = '';
    }
});

function playSong(song) {
    audioPlayer.src = `Vs Imposter v5/${song}`;
    audioPlayer.play();
}

function displaySongTitle(song) {
    songTitle.textContent = song;
}

// Initial song load
if (songs.length > 0) {
    displaySongTitle(songs[0]);
    playSong(songs[0]);
}

// Initial song load
if (songs.length > 0) {
    playSong(songs[0]);
}
