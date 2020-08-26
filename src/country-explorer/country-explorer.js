import { CountriesApi } from '../apis/countries-api';

export class CountryExplorer {
    static inject = [CountriesApi];
    message = 'I work'
}