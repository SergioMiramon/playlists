import './style.css'
import { linkPage } from './utils/linkPage';
import { Navbar } from './components/Navbar/Navbar';
// import { Home } from './pages/Home/Home'
import { Playlists } from './pages/Playlists/Playlists'
import { router, addListeners } from "./router";
const header = document.querySelector("header");
header.innerHTML = Navbar();
// linkPage("#homelink", Home);
linkPage("#playlistslink", Playlists)
// Home();
Playlists();
console.log(Playlists());

router();
addListeners();