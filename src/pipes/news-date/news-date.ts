import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NewsDatePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'newsDate',
})
export class NewsDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if(value == "") return "";
    let date = new Date(value).toDateString().split(' ');
    return date[1] +" "+date[2]+ " "+ date[3];
  }
}
