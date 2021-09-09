const lg = console.log;
import { unsplash_triggerSearch } from "./../model/fetchUnsplash.js";
export const onLoadDisplayImagesDOM = () => {
  let galleryContainer = document.querySelector("#galleryContainer");
  unsplash_triggerSearch("all", 1, 10)
    .then(imgs => {
      let galleryDislpay = document.createElement("div");
      galleryDislpay.classList.add("main__gallery__display");
      galleryDislpay.classList.add("gridGallery");
      for (let i = 0; i < imgs.length; i++) {
        let imageElement = document.createElement("div");
        imageElement.classList.add(`main__gallery__display__imgCtn`);
        imageElement.classList.add("flexCtn");
        let imgURL = imgs[i].urls.regular;
        let imgTitle = "";
        if ((imgs[i].description) === null) {
          imgTitle = "Generic Title";
        }
        else if ((imgs[i].description).length > 40) {
          imgTitle = imgs[i].alt_description;
        } else {
          imgTitle = imgs[i].description;
        }
        let imgCategory = "All";
        let imageMarkup = `
          <div class="main__gallery__display__imgCtn__mask  flexCtn">
            <h3>${imgTitle}</h3>
            <h4>${imgCategory}</h4>
          </div>
          <img class="main__gallery__display__imgCtn__srcImg" loading="lazy" src=${imgURL} alt=${imgTitle}>
        `
        imageElement.innerHTML = imageMarkup;
        galleryDislpay.appendChild(imageElement);
      }
      galleryContainer.appendChild(galleryDislpay);
    })
}
export const triggerDisplayImagesDOM = (query) => {
  unsplash_triggerSearch(query, 1, 10)
  .then(imgs => {
    galleryContainer.innerHTML = ""; 
    let galleryDislpay = document.createElement("div");
    galleryDislpay.classList.add("main__gallery__display");
    galleryDislpay.classList.add("gridGallery");
    for (let i = 0; i < imgs.length; i++) {
      let imageElement = document.createElement("div");
      imageElement.classList.add(`main__gallery__display__imgCtn`);
      imageElement.classList.add("flexCtn");
      let imgURL = imgs[i].urls.regular;
      let imgTitle = "";
      if ((imgs[i].description) === null) {
        imgTitle = "Generic Title";
      }
      else if ((imgs[i].description).length > 40) {
        imgTitle = imgs[i].alt_description;
      } else {
        imgTitle = imgs[i].description;
      }
      let imgCategory = query;
      let imageMarkup = `
        <div class="main__gallery__display__imgCtn__mask  flexCtn">
          <h3>${imgTitle}</h3>
          <h4>${imgCategory}</h4>
        </div>
        <img class="main__gallery__display__imgCtn__srcImg" loading="lazy" src=${imgURL} alt=${imgTitle}>
      `
      imageElement.innerHTML = imageMarkup;
      galleryDislpay.appendChild(imageElement);
    }
    galleryContainer.appendChild(galleryDislpay);
  })
}
export const triggerShowMoreImagesDOM = (query, page) => {
  unsplash_triggerSearch(query, page, 10)
  .then(imgs => {
    let galleryDislpay = document.createElement("div");
    galleryDislpay.classList.add("main__gallery__display");
    galleryDislpay.classList.add("gridGallery");
    for (let i = 0; i < imgs.length; i++) {
      let imageElement = document.createElement("div");
      imageElement.classList.add(`main__gallery__display__imgCtn`);
      imageElement.classList.add("flexCtn");
      let imgURL = imgs[i].urls.regular;
      let imgTitle = "";
      if ((imgs[i].description) === null) {
        imgTitle = "Generic Title";
      }
      else if ((imgs[i].description).length > 40) {
        imgTitle = imgs[i].alt_description;
      } else {
        imgTitle = imgs[i].description;
      }
      let imgCategory = query;
      let imageMarkup = `
        <div class="main__gallery__display__imgCtn__mask  flexCtn">
          <h3>${imgTitle}</h3>
          <h4>${imgCategory}</h4>
        </div>
        <img class="main__gallery__display__imgCtn__srcImg" loading="lazy" src=${imgURL} alt=${imgTitle}>
      `
      imageElement.innerHTML = imageMarkup;
      galleryDislpay.appendChild(imageElement);
    }
    galleryContainer.appendChild(galleryDislpay);
  })
}