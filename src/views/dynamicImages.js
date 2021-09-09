import { unsplash_triggerSearch } from "./../model/fetchUnsplash.js";
import { createDOMElement } from "./../model/helpers.js";
//  Global DOM elements and Functions:
let galleryContainer      = document.querySelector("#galleryContainer");
const imageCardInnerHTML  = (title, category, srcUrl) => {
  return `
  <div class="main__gallery__display__imgCtn__mask  flexCtn">
    <h3>${title}</h3>
    <h4>${category}</h4>
  </div>
  <img class="main__gallery__display__imgCtn__srcImg" loading="lazy" src=${srcUrl} alt=${title}>
  `
} 
const defineImgTitleAPI   = (imgObject) => {
  let title = "";
  if ((imgObject.description) === null) {
    title = "Generic Title";
  }
  else if ((imgObject.description).length > 40) {
    title = imgObject.alt_description;
  } else {
    title = imgObject.description;
  }
  return title;
}
//  Images dynamic loading functions:
export const onLoadDisplayImagesDOM = () => {
  unsplash_triggerSearch("all", 1, 10)
    .then(imgs => {
      let galleryDislpay  = createDOMElement("div", "main__gallery__display", "gridGallery");
      for (let i = 0; i < imgs.length; i++) {
        let imageElement        = createDOMElement("div", "main__gallery__display__imgCtn", "flexCtn");
        let imgTitle            = defineImgTitleAPI(imgs[i]);
        let imgCategory         = "All";
        let imgURL              = imgs[i].urls.regular;
        imageElement.innerHTML  = imageCardInnerHTML(imgTitle, imgCategory, imgURL);
        galleryDislpay.appendChild(imageElement);
      }
      galleryContainer.appendChild(galleryDislpay);
    })
}
export const triggerDisplayImagesDOM = (query, displayMode) => {
  unsplash_triggerSearch(query, 1, 10)
  .then(imgs => {
    galleryContainer.innerHTML = ""; 
    let galleryDislpay = createDOMElement("div", "main__gallery__display", displayMode);
    for (let i = 0; i < imgs.length; i++) {
      let imageElement        = createDOMElement("div", "main__gallery__display__imgCtn", "flexCtn");
      let imgTitle            = defineImgTitleAPI(imgs[i]);
      let imgCategory         = query;
      let imgURL              = imgs[i].urls.regular;
      imageElement.innerHTML  = imageCardInnerHTML(imgTitle, imgCategory, imgURL);
      galleryDislpay.appendChild(imageElement);
    }
    galleryContainer.appendChild(galleryDislpay);
  })
}
export const triggerShowMoreImagesDOM = (query, page, displayMode) => {
  unsplash_triggerSearch(query, page, 10)
  .then(imgs => {
    let galleryDislpay = createDOMElement("div", "main__gallery__display", displayMode);
    for (let i = 0; i < imgs.length; i++) {
      let imageElement        = createDOMElement("div", "main__gallery__display__imgCtn", "flexCtn");
      let imgTitle            = defineImgTitleAPI(imgs[i]);
      let imgCategory         = query;
      let imgURL              = imgs[i].urls.regular;
      imageElement.innerHTML  = imageCardInnerHTML(imgTitle, imgCategory, imgURL);
      galleryDislpay.appendChild(imageElement);
    }
    galleryContainer.appendChild(galleryDislpay);
  })
}