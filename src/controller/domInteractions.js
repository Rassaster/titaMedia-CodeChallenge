const lg = console.log;
import { triggerDisplayImagesDOM, triggerShowMoreImagesDOM } from "./../views/dynamicImages.js";
import { addClass, removeClass } from "./../model/helpers.js";

//  Global Variables 
let globalQuery = "All";
let globalPage = 1;

//  Global DOM Elements
const showMeMoreBtn = document.querySelector("#showMeMoreBtn");
const mainCategoriesTags = Array.from(document.querySelectorAll(".trigFetch"));

document.addEventListener("click", e => {
  if (e.target.classList[0] === "trigFetch") {
    let localQuery = e.target.innerText;
    mainCategoriesTags.forEach(element => {
      removeClass(element, "mainCategoriesQueriesSelected");
      if (element.innerHTML === localQuery) {
        addClass(element, "mainCategoriesQueriesSelected");
      }
    });
    triggerDisplayImagesDOM(localQuery);
    globalQuery = localQuery;
    globalPage = 1;
    e.target.classList[1] === "mobileAnchor" ? closeMobileNav() : null;
  }
})
showMeMoreBtn.addEventListener("click", () => {
  globalPage++;
  triggerShowMoreImagesDOM(globalQuery, globalPage);
})
//  Desktop Interactions
const searchDesktop = document.querySelector("#searchDesktop");
const searchtButtonDesktop = document.querySelector("#searchtButtonDesktop");
const searchInputDesktop = document.querySelector("#searchInputDesktop");
searchDesktop.addEventListener("mouseenter", () => {
  searchInputDesktop.style.width = "calc(100vw * (150 / 1280))";
  searchInputDesktop.style.border = "1px solid $mainPink";
})
searchDesktop.addEventListener("mouseleave", () => {
  searchInputDesktop.style.width = "0";
  searchInputDesktop.style.borderWidth = "0";
})
searchInputDesktop.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    triggerDisplayImagesDOM(searchInputDesktop.value);
    globalQuery = searchInputDesktop.value;
    globalPage = 1;
    window.scrollTo(0, 690);
    mainCategoriesTags.forEach(element => {
      removeClass(element, "mainCategoriesQueriesSelected");
    });
  }
})
searchtButtonDesktop.addEventListener("click", () => {
  triggerDisplayImagesDOM(searchInputDesktop.value);
  globalQuery = searchInputDesktop.value;
  globalPage = 1;
  window.scrollTo( 0, 690);
  mainCategoriesTags.forEach(element => {
    removeClass(element, "mainCategoriesQueriesSelected");
  });
})
//  MOBILE INTERACTIONS
//  Hamburguer Menu:
const openHamurger = document.querySelector("#openHamurger");
const closeHamurger = document.querySelector("#closeHamurger");
const mobileNav = document.querySelector("#mobileNav");
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
//  Mobile Search:
const searchtButtonMob = document.querySelector("#searchtButtonMob");
const searchInputMob = document.querySelector("#searchInputMob");
searchtButtonMob.addEventListener("click", () => {
  triggerDisplayImagesDOM(searchInputMob.value);
  globalQuery = searchInputMob.value;
  globalPage = 1;
  window.scrollTo( 0, 1000);
  mainCategoriesTags.forEach(element => {
    removeClass(element, "mainCategoriesQueriesSelected");
  });
  closeMobileNav();
})


