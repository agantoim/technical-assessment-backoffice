import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'fullDateFormatPipe'
})
export class FullDateFormatPipe implements PipeTransform {

    transform(value: string | Date): string {
        if (!value) {
            return '';
        }

        const date = typeof value === 'string' ? new Date(value) : value;

        const datePipe = new DatePipe('en-US');
        const formattedDate = datePipe.transform(date, 'dd MMMM yyyy');

        return formattedDate || '';
    }
}
