import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paddzero'
})
export class PaddzeroPipe implements PipeTransform {

  transform(value: number): string {
    return value < 10 ? '0' + value.toString() : value.toString();
  }

}
