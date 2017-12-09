import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NewsTimeLeftPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'newsTimeLeft',
})
export class NewsTimeLeftPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if(value == "") return "";
    let date = new Date(value);
    let now = new Date();
    let leftTime ="";
    if((now.getDate() - date.getDate()) > 0)
    {
      leftTime = (now.getDate() - date.getDate()).toString()+"d ago";
    }
    else if((now.getHours() - date.getHours()) > 0)
    {
      leftTime = (now.getHours() - date.getHours()).toString()+"h ago";
    }
    else
    {
       leftTime = (now.getMinutes() - date.getMinutes()).toString()+"m ago";
    }
    return leftTime;
  }
}
