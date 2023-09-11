// import "./Sidebar.css"
// import { foldersDeluxe, foldersExtra, foldersForeign, foldersOrigin, foldersTier1, foldersTops, foldersTv, playlists } from "../../data/playlists";
// import { uniqueFolders } from "../../data/playlists";
// import { cleanPage } from "../../utils/cleanPage";

// export const Sidebar = () => {
//     const main = document.querySelector("main");
//   cleanPage(main);
//   main.innerHTML = `
// <!--<section class="fullplaylists">
//   <section class="sidebar">
//     <ul class="folder-list">
//     <input class="input" type='text' placeholder='Search for a playlist'>
//       <h3>Choose a folder</h3>
//     </ul>
//   </section>
//   <section class="playlists">
//   <div class="playlists-container">
//   </div>
//   </section>
// </section>-->
// `;
//     const folderList = document.querySelector(".folder-list");
//     for (const folder of uniqueFolders) {
//       const ul = document.createElement("ul");
//       ul.innerHTML = folder;
//       ul.setAttribute("id", `${folder}`);
//       folderList.appendChild(ul);
  
      
//       if (folder === "tier1") {
//         for (const tier of foldersTier1) {
//           const li = document.createElement("li");
//           li.innerHTML = tier.Name;
//           ul.appendChild(li);
//         }
//       }
  
//       if (folder === "origin") {
//         for (const origin of foldersOrigin) {
//           const li = document.createElement("li");
//           li.innerHTML = origin.Name;
//           ul.appendChild(li);
//         }
//       }
  
//       if (folder === "deluxe") {
//         for (const deluxe of foldersDeluxe) {
//           const li = document.createElement("li");
//           li.innerHTML = deluxe.Name;
//           ul.appendChild(li);
//         }
//       }
  
//       if (folder === "foreign") {
//         for (const foreign of foldersForeign) {
//           const li = document.createElement("li");
//           li.innerHTML = foreign.Name;
//           ul.appendChild(li);
//         }
//       }
  
//       if (folder === "tv") {
//         for (const tv of foldersTv) {
//           const li = document.createElement("li");
//           li.innerHTML = tv.Name;
//           ul.appendChild(li);
//         }
//       }
  
//       if (folder === "extra") {
//         for (const extra of foldersExtra) {
//           const li = document.createElement("li");
//           li.innerHTML = extra.Name;
//           ul.appendChild(li);
//         }
//       }
  
//       if (folder === "tops") {
//         for (const top of foldersTops) {
//           const li = document.createElement("li");
//           li.innerHTML = top.Name;
//           ul.appendChild(li);
//         }
//       }
  
      
//     }
//   }