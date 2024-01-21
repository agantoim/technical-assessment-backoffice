import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rupiahCurrencyPipe'
})
export class RupiahCurrencyPipe implements PipeTransform {
    transform(value: number | null): string {
        if (value === null || value === undefined) {
            return '';
        }

        const formattedValue = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(value);

        return formattedValue;
    }
}
