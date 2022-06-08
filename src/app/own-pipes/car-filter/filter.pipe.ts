import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class FilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldName: string) {
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }

    return carList.filter(car => car[fieldName].toLowerCase().includes(searchStr))
  }

}
