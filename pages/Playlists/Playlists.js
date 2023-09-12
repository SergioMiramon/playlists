import "./Playlists.css";
import { cleanPage } from "../../utils/cleanPage";
import { foldersDeluxe, foldersExtra, foldersForeign, foldersOrigin, foldersTier1, foldersTops, foldersTv, playlistCount, playlists } from "../../data/playlists";
import { uniqueFolders } from "../../data/playlists";
import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard";
import { PlaylistModal } from "../../components/PlaylistModal/PlaylistModal";
export const Playlists = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="fullplaylists">
  <section class="sidebar">
    <ul class="folder-list">
    <h3>Folders</h3>
    <input class="input" type='text' placeholder='Search for a playlist'>
    </ul>
  </section>
  <section class="playlists">
  <div class="playlists-modal">
  </div>
  <div class="playlists-container">
  </div>
  <div class="playlists-total">
  <h4 class="tot">(${playlistCount})</h4>
  </div>
  </section>
</section>
`;
  const container = document.querySelector(".playlists-container");
  const playlistModal = document.querySelector(".playlists-modal");
  const playlistTotal = document.querySelector(".playlists-total");
  for (const playlist of playlists) {
    const figure = document.createElement("figure");
    figure.innerHTML = PlaylistCard(playlist);

    figure.addEventListener('click', ()=> {
      const modal = document.createElement("div");
      modal.innerHTML = PlaylistModal(playlist)
      modal.setAttribute("class", `modal`);
      modal.setAttribute("id", `${playlist.Name}`);
      cleanPage(container)
      cleanPage(playlistTotal)
      playlistModal.appendChild(modal)
    })

    container.appendChild(figure);

    
  }

  const folderList = document.querySelector(".folder-list");
  for (const folder of uniqueFolders) {
    const ul = document.createElement("ul");
    ul.innerHTML = folder;
    ul.setAttribute("id", `${folder}`);
    folderList.appendChild(ul);

    
    if (folder === "tier1") {
      for (const tier of foldersTier1) {
        const li = document.createElement("li");
        li.innerHTML = tier.Name;
        ul.appendChild(li);
      }
    }

    if (folder === "origin") {
      for (const origin of foldersOrigin) {
        const li = document.createElement("li");
        li.innerHTML = origin.Name;
        ul.appendChild(li);
      }
    }

    if (folder === "deluxe") {
      for (const deluxe of foldersDeluxe) {
        const li = document.createElement("li");
        li.innerHTML = deluxe.Name;
        ul.appendChild(li);
      }
    }

    if (folder === "foreign") {
      for (const foreign of foldersForeign) {
        const li = document.createElement("li");
        li.innerHTML = foreign.Name;
        ul.appendChild(li);
      }
    }

    if (folder === "tv") {
      for (const tv of foldersTv) {
        const li = document.createElement("li");
        li.innerHTML = tv.Name;
        ul.appendChild(li);
      }
    }

    if (folder === "extra") {
      for (const extra of foldersExtra) {
        const li = document.createElement("li");
        li.innerHTML = extra.Name;
        ul.appendChild(li);
      }
    }

    if (folder === "tops") {
      for (const top of foldersTops) {
        const li = document.createElement("li");
        li.innerHTML = top.Name;
        ul.appendChild(li);
      }
    }
    
      ul.addEventListener("click", () => {
        const li = ul.querySelectorAll(".folder-list ul li");
        li.forEach(
          li => li.classList.toggle('dropable'));

    })
  }

}

document.addEventListener("keyup", e => {

    if (e.target.matches(".input")) {
  
      if (e.key === "Escape") e.target.value = "";
  
      let count = 0
      document.querySelectorAll("figure").forEach(playlist => {
  
        if (playlist.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
          // && e.target.value.toLowerCase() !== ""
          playlist.classList.remove("searchfilter")
          count++
        } else {
          playlist.classList.add("searchfilter")
        }
      })

      const playlistTotal = document.querySelector(".tot")
      playlistTotal.innerHTML = `(${count})`
      console.log(playlistTotal)
      
      const tot = document.querySelector(".playlist-total");
      tot.appendChild(playlistTotal)
      console.log(tot)
      console.log(count);
    }
  })

