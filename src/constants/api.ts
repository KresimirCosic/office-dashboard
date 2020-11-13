const baseURL = 'http://us-central1-test-b7665.cloudfunctions.net/api/stores';
const storeID = 'ijpxNJLM732vm8AeajMR';
const storeEndpoint = `${baseURL}/${storeID}`;
const productsEndpoint = `${baseURL}/${storeID}/products`;
const statsEndpoint = `${baseURL}/${storeID}/stats/categories`;

export { baseURL, storeID, storeEndpoint, productsEndpoint, statsEndpoint };
