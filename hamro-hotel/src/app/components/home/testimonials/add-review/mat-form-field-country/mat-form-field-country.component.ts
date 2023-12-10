import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormFieldCountriesService } from './form-field-countries.service';
import { Country } from './form-field-countries.interface';

@Component({
    selector: 'mat-form-field-country',
    templateUrl: './mat-form-field-country.component.html',
    styleUrls: ['./mat-form-field-country.component.scss'],
})
export class MatFormFieldCountryComponent {
    stateCtrl = new FormControl('');
    filteredCountry: Observable<Country[]>;

    myountriesNameAndSvgData: Country[] = [];
    country: Country[] = [];

    constructor(private formFieldCountriesService: FormFieldCountriesService) {
        this.filteredCountry = this.stateCtrl.valueChanges.pipe(
            startWith(''),
            map((country) => (country ? this._filterCountry(country) : this.country.slice()))
        );
    }

    ngOnInit() {
        this.fetchCountriesNameAndSvgData();
    }

    fetchCountriesNameAndSvgData() {
        this.formFieldCountriesService.getCountriesNameAndSvgData().subscribe({
            next: (data) => {
                console.log(data);
                if (data.length === 0) {
                    console.log('No testimonials available.');
                } else {
                    this.myountriesNameAndSvgData.push(...data);
                }
            },
            error: (error) => {
                console.error('Error fetching testimonials:', error);
                // Handle error scenario here
                // For instance, setting a default value or showing an error message
            },
        });
    }

    private _filterCountry(value: string): Country[] {
        const filterValue = value.toLowerCase();

        return this.country.filter((country) => country.name.toLowerCase().includes(filterValue));
    }
}
