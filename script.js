const songs = [
    "1. Menu.mp3",
    "2. Where Are You.mp3",
    "3. Eruption.mp3",
    "4. Kaio-Ken.mp3",
    "5. What's New.mp3",
    "6. Blast.mp3",
    "7. Super Saiyan.mp3",
    "9. God Eater.mp3",
    "10. Soothing Power.mp3",
    "11. Thunderstorm.mp3",
    "12. Dissasembler.mp3",
    "13. Astral Calamity.mp3",
    "14. Talladega.mp3"
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
