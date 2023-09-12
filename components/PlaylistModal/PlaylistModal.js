import "./PlaylistModal.css";

export const PlaylistModal = (playlist) => `
<div class="playlist-modal">
    <div class="modal-name">
        <h2>${playlist.Name}</h2>
        <a class="arrow" href=".fullplaylists">
            <i class="arrows icon-arrow-left2"></i>
        </a>
    </div>
    <div class="modal-info">
    ${playlist.Iframe}
    </div>
</div>
`;