import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the CaptitalizeFirstLetterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: "CaptitalizeFirstLetter"
})
export class CaptitalizeFirstLetterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    let result = "";
    value.split("-").forEach(element => {
      result +=element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    return result;
  }
}
