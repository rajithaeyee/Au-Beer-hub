import {autoinject} from 'aurelia-framework';
import {BeerService} from './services/beer-service';
import {Beer} from './models/beer';

@autoinject
export class LandingPage{
beers:any[]=[];
    constructor(private beerService:BeerService){
        
}

async activate(){
    await this.getBeers();
}

async getBeers(){
this.beers = await this.beerService.getBeers();
console.log(this.beers);
}

}