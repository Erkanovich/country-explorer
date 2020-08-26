import { CountriesApi } from '../apis/countries-api';
import { observable } from 'aurelia-framework'

export class CountryExplorer {
    static inject = [CountriesApi];

    @observable selectedRegion;

    constructor(api) {
        this.api = api;
    }

    async bind() {
        this.allCountries = await this.api.getAllCountries();
        this.filteredCountries = this.allCountries;
        this.allRegions = Array.from(new Set(this.allCountries.map(country => country.region)));
        this.allRegions.pop(); //Ugly
    }

    selectedRegionChanged(newValue, oldValue) {
        //filter
        if (newValue === "") {
            this.filteredCountries = this.allCountries;
        } else {
            this.filteredCountries = this.allCountries.filter(x => x.region === newValue);
            console.log(this.filteredCountries);
        }
    }
}