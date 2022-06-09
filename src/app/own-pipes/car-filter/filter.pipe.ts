import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: true, //false = контент обновляется динамически, true = контент фильтруется, а потом добавится
})
export class FilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldName: string) {
    console.log('FilterPipe');
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }

    return carList.filter(car => car[fieldName].toLowerCase().includes(searchStr))
  }

}
