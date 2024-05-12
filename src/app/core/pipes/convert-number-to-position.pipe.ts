import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertNumberToPosition',
  standalone: true
})
export class ConvertNumberToPositionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const valueToString = value.toString();
    const lastDigit = valueToString[valueToString.length - 1];
    if (lastDigit === '1') {
      return valueToString + 'st';
    } else if (lastDigit === '2') {
      return valueToString + 'nd';
    } else if (lastDigit === '3') {
      return valueToString + 'rd';
    } else {
      return valueToString + 'th';
    }
  }

}
