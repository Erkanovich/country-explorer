import { bindable } from 'aurelia-framework';

export class RegionFilter {
    @bindable regions = [];
    @bindable selectedRegion = '';
}