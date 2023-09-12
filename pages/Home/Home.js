import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<nav class="buttons">
<a href="/playlists" id="playlistslink">
<button>
    <div class="cards">
        <img src="./icons/images/all/logo.png" alt="logo">
        <h1>Mis Playlists</h1>
    </div>
</button>
</a>
<!--<a href="/calendar" id="playlistslink">
<button>
    <div class="cards">
        <img src="./icons/images/all/logo.png" alt="logo">
        <h1>Calendario</h1>
    </div>      
</button>
</a>-->
</nav>`;
};

