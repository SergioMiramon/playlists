import './style.css'
import { linkPage } from './utils/linkPage';
import { Navbar } from './components/Navbar/Navbar';
import { Playlists } from './pages/Playlists/Playlists'
import { router, addListeners } from "./router";
const header = document.querySelector("header");
header.innerHTML = Navbar();
linkPage("#playlistslink", Playlists)
Playlists();

router();
addListeners();