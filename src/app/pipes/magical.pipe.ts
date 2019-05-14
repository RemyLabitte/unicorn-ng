import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'magical'
})
export class MagicalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('').map((char, index) => {
      if (index % 2) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }).join('');
  }

}
