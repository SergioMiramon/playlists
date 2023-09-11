import "./PlaylistCard.css";


export const PlaylistCard = (playlist) => `
<div class="playlist-card">
    <div class="image">
        <img src="${playlist.Image}"  alt="${playlist.Name}">
    </div>
    <div class="info">
    <div class="name">
    <h2>${playlist.Name}</h2>
    </div>
    </div>
</div>
`;


// Array.from(playlists).forEach(playlist => {
//     playlist.addEventListener('click', event => {
//         const playlist_selected = +event.target.dataset.playlists
//         img_slideshow.src = images_mad[playlist_selected].img
//         contador_mad = playlist_selected
//         overlay.style.opacity = 1
//         overlay.style.visibility = 'visible'
//     })
//   })