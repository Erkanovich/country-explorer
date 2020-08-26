import { bindable } from 'aurelia-framework';

export class CountryCard {

    @bindable imageUrl;
    @bindable name = 'Country name not available';
    @bindable nativeName = 'Native name not available';
    @bindable region = 'Region not available';
    @bindable capital = 'Capital not available';
    @bindable population = 'Population not available';
}