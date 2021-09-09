//  Constants for fetching Unsplash API:
const unsplash_BaseURL = "https://api.unsplash.com";
const unsplash_APIKey = "BumccbjwDAHEq1iVsADbyN1LR6pFJWtRUXxiPEVHTAg";
const unsplash_SearchEndpoint = '/search/photos?';
const unsplash_Query = 'query=';
const unsplash_Page = '&page=';
const unsplash_PerPage = '&per_page=';
//  Preparing request Headers and Options:
let unsplashHeaders = new Headers();
unsplashHeaders.append("Authorization", `Client-ID ${unsplash_APIKey}`);
unsplashHeaders.append("Accept-Version", "v1");
let unsplashRequestOptions = {
  method: 'GET',
  headers: unsplashHeaders,
};
//  Fetch GET to Unsplash API. Returns an array of objects of each image:
export const unsplash_triggerSearch = async (query, page, perPage) => {
  let response = await fetch(`${unsplash_BaseURL}${unsplash_SearchEndpoint}${unsplash_Query}${query}${unsplash_Page}${page}${unsplash_PerPage}${perPage}`, unsplashRequestOptions);
  let data = await response.json();
  let images = data.results;
  return images;
}