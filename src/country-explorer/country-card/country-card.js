import { bindable } from 'aurelia-framework';

export class CountryCard {

    @bindable imageUrl;
    @bindable name = 'Country name not available';
    @bindable nativeName = 'Native name not available';
}