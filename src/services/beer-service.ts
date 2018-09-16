import {HttpClient, json} from 'aurelia-fetch-client';
let http = new HttpClient();
export class BeerService{

constructor(){
console.log(http);
}

async getBeers(){
let beers= await http.fetch('https://api.punkapi.com/v2/beers?page=1');
return beers.json();
}
}