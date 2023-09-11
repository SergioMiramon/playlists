import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="buttons">
<button>
<a href="/playlists" id="playlistslink">
    <div class="cards">
        <img src="./icons/images/all/logo.png" alt="logo">
        <h1>Mis Playlists</h1>
    </div>
</a>      
</button>
<button>
<a href="/calendar" id="playlistslink">
    <div class="cards">
        <img src="./icons/images/all/logo.png" alt="logo">
        <h1>Calendario</h1>
    </div>
</a>      
</button>
</section>`;
};
