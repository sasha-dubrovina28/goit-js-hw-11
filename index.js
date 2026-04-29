import{a as d,S as f,i as a}from"./assets/vendor-D1AWmRWP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){return d.get("https://pixabay.com/api/",{params:{key:"55647449-f4e56103f1aaaeb422f0623cd",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(){l.innerHTML=""}function h(){u.classList.remove("hidden")}function g(){u.classList.add("hidden")}function b(s){const o=s.map(r=>`
        <li class="gallery-item">
          <a href="${r.largeImageURL}">
            <img 
              src="${r.webformatURL}" 
              alt="${r.tags}" 
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),p.refresh()}const i=document.querySelector(".form");i.addEventListener("submit",s=>{s.preventDefault();const o=i.elements["search-text"].value.trim();if(o===""){a.error({message:"Please enter a search query!"});return}y(),h(),m(o).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(r.hits)}).catch(r=>{a.error({message:"Something went wrong. Please try again later!"})}).finally(()=>{g(),i.reset()})});
//# sourceMappingURL=index.js.map
