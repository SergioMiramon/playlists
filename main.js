import './style.css'
import { linkPage } from './utils/linkPage';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home'
import { Playlists } from './pages/Playlists/Playlists'
import { router, addListeners } from "./router";
import { PlaylistCard } from './components/PlaylistCard/PlaylistCard';
import { PlaylistModal } from './components/PlaylistModal/PlaylistModal';
import { playlistCount, playlists } from './data/playlists';
const header = document.querySelector("header");
header.innerHTML = Navbar();
linkPage("#homelink", Home);
linkPage("#playlistslink", Playlists);
Home();
Playlists();
PlaylistCard();
PlaylistModal();
playlistCount();
playlists();

router();
addListeners();