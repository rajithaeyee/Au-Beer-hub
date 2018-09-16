import {Volume} from './volume';

export interface Beer{
    id:number;
    name:string;
    first_brewed:string;
    description:string;
    image_url:string;
    abv:number;
    ibu:number;
    target_fg:number;
    target_og:number;
    ebc:number;
    srm:number;
    ph:number;
    attenuation_level:number;
    volume:Volume;
    boil_volume:Volume;
}