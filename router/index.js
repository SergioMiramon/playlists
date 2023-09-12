import { Home } from "../pages/Home/Home";
import { Playlists } from "../pages/Playlists/Playlists";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/playlists",
		component: Playlists,
	},
];

export const router = () => {
	const path = window.location.pathname;

	const {component} = routes.find((route) => route.path === path) || {};
	if (component) {
		component();
	} else {
		NotFound();
	}
};


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", router);

// export const addListeners = () => {
// 	const navLinks = document.querySelectorAll("nav a");
// 	navLinks.forEach((link) => {

// 		link.addEventListener("click", (ev) => {
	
// 			ev.preventDefault();
	
// 			const href = link.getAttribute("href");
	
// 			history.pushState(null, null, href);
	
// 			router();
// 		});
// 	});
// };