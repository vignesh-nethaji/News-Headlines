import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MathcesCategoryPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'MathcesCategory',
})
export class MathcesCategoryPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<any>, search: string) {
    if(search == "")return value;
    return value.filter(x  => x.name.toLowerCase().indexOf(search.toLowerCase()) != -1 || x.id.indexOf(search.toLowerCase()) != -1);
  }
}
