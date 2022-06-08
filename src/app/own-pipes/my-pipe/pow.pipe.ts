import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'appPow'
})

export class PowPipe implements PipeTransform {
  transform(value: number, powNumer: number = 1, symbol: string) {
    return symbol + Math.pow(value, powNumer);
  };
}
