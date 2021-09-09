import { triggerDisplayImagesDOM, triggerShowMoreImagesDOM } from "./../views/dynamicImages.js";
import { addClass, removeClass } from "./../model/helpers.js";
//  GLOBAL VARIABLES 
let globalQuery           = "All";
let globalPage            = 1;
let globalGalleryDisplay  = "gridGallery";

//  GLOBAL DOM ELEMENTS
const showMeMoreBtn       = document.querySelector("#showMeMoreBtn");
const mainCategoriesTags  = Array.from(document.querySelectorAll(".trigFetch"));
//  Trigger search of main categories:
document.addEventListener("click", e => {
  if (e.target.classList[0] === "trigFetch") {
    let localQuery = e.target.innerText;
    mainCategoriesTags.forEach(element => {
      removeClass(element, "mainCategoriesQueriesSelected");
      if (element.innerHTML === localQuery) {
        addClass(element, "mainCategoriesQueriesSelected");
      }
    });
    triggerDisplayImagesDOM(localQuery, globalGalleryDisplay);
    globalQuery = localQuery;
    globalPage = 1;
    e.target.classList[1] === "mobileAnchor" ? closeMobileNav() : null;
  }
})
//  Trigger search of new pages of the current query term:
showMeMoreBtn.addEventListener("click", () => {
  globalPage++;
  triggerShowMoreImagesDOM(globalQuery, globalPage, globalGalleryDisplay);
})
//  ******************************************************************************************
//  DESKTOP INTERACTIONS
//  Search elements and functions:
const searchDesktop         = document.querySelector("#searchDesktop");
const searchtButtonDesktop  = document.querySelector("#searchtButtonDesktop");
const searchInputDesktop    = document.querySelector("#searchInputDesktop");
//  Display input element on "mouseenter" event:
searchDesktop.addEventListener("mouseenter", () => {
  searchInputDesktop.style.width = "calc(100vw * (150 / 1280))";
  searchInputDesktop.style.border = "1px solid $mainPink";
})
//  Hide input element on "mouseleave" event:
searchDesktop.addEventListener("mouseleave", () => {
  searchInputDesktop.style.width = "0";
  searchInputDesktop.style.borderWidth = "0";
})
//  Trigger search by pressing the "Enter" key:
searchInputDesktop.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    triggerDisplayImagesDOM(searchInputDesktop.value, globalGalleryDisplay);
    globalQuery = searchInputDesktop.value;
    globalPage = 1;
    window.scrollTo(0, 690);
    mainCategoriesTags.forEach(element => {
      removeClass(element, "mainCategoriesQueriesSelected");
    });
  }
})
//  Trigger search by clicking the search button:
searchtButtonDesktop.addEventListener("click", () => {
  triggerDisplayImagesDOM(searchInputDesktop.value, globalGalleryDisplay);
  globalQuery = searchInputDesktop.value;
  globalPage = 1;
  window.scrollTo( 0, 690);
  mainCategoriesTags.forEach(element => {
    removeClass(element, "mainCategoriesQueriesSelected");
  });
})
//  Select Gallery display: grid or blocks.
const gridDisplayModeBtn  = document.querySelector("#gridDisplayModeBtn");
const flexDisplayModeBtn  = document.querySelector("#flexDisplayModeBtn");
gridDisplayModeBtn.addEventListener("click", () => {
  const galleryDislpayTags = Array.from(document.querySelectorAll(".main__gallery__display"));
  galleryDislpayTags.forEach(element => {
    addClass(element, "gridGallery");
    removeClass(element, "flexGallery");
  })
  globalGalleryDisplay = "gridGallery";
  addClass(gridDisplayModeBtn, "displayModeSelected");
  removeClass(flexDisplayModeBtn, "displayModeSelected");
})
flexDisplayModeBtn.addEventListener("click", () => {
  const galleryDislpayTags = Array.from(document.querySelectorAll(".main__gallery__display"));
  galleryDislpayTags.forEach(element => {
    addClass(element, "flexGallery");
    removeClass(element, "gridGallery");
  })
  globalGalleryDisplay = "flexGallery";
  addClass(flexDisplayModeBtn, "displayModeSelected");
  removeClass(gridDisplayModeBtn, "displayModeSelected");
})
//  ******************************************************************************************
//  MOBILE INTERACTIONS
//  Hamburguer Menu open/close elements and functions:
const openHamurger  = document.querySelector("#openHamurger");
const closeHamurger = document.querySelector("#closeHamurger");
const mobileNav     = document.querySelector("#mobileNav");
const openMobileNav = () => {
  openHamurger.style.display = "none";
  closeHamurger.style.display = "block";
  mobileNav.style.height = "83vh";
}
const closeMobileNav = () => {
  closeHamurger.style.display = "none";
  openHamurger.style.display = "block";
  mobileNav.style.height = "0";
}
openHamurger.addEventListener("click", () => {
  openMobileNav();
})
closeHamurger.addEventListener("click", () => {
  closeMobileNav();
})
//  Search elements and functions:
const searchtButtonMob  = document.querySelector("#searchtButtonMob");
const searchInputMob    = document.querySelector("#searchInputMob");
searchtButtonMob.addEventListener("click", () => {
  triggerDisplayImagesDOM(searchInputMob.value, "flexGallery");
  globalQuery = searchInputMob.value;
  globalPage = 1;
  window.scrollTo(0, 900);
  mainCategoriesTags.forEach(element => {
    removeClass(element, "mainCategoriesQueriesSelected");
  });
  closeMobileNav();
})
//  ******************************************************************************************