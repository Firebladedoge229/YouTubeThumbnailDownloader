document.getElementById('getThumbnail').addEventListener('click', () => {
    const videoURL = document.getElementById('videoURL').value;
    const videoID = videoURL.split('v=')[1]?.split('&')[0];

    if (!videoID) {
        alert("Please enter a valid YouTube URL.");
        return;
    }

    const thumbnailURL = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
    const container = document.getElementById('thumbnail-container');
    container.innerHTML = `<img src="${thumbnailURL}" alt="YouTube Thumbnail">`;
});
