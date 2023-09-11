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
