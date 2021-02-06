import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public source: string;
    public imagePath: string;
    public hour: number;
    public minutes: number;

  public ingredients: Ingredient[];

  // tslint:disable-next-line:max-line-length
    constructor(name: string, description: string,  source: string, imagePath: string, hour: number, minutes: number,  ingredients: Ingredient[]){
        this.name = name;
        this.source = source;
        this.imagePath = imagePath;
        this.description = description;
        this.hour = hour;
        this.minutes = minutes;
        this.ingredients = ingredients;
    }
}
