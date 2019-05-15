import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'magicalName'
})
export class MagicalNamePipe implements PipeTransform {

  transform(name: string): string {
    return name.split('').map((element, index) => {
      return index % 2 ? element.toLowerCase() : element.toUpperCase();
    }).join('');
  }

}
