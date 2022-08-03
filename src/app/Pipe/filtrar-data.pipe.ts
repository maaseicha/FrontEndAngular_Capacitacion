import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarData'
})
export class FiltrarDataPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    let result;
    if (args[0]) {
      result = value.filter(val =>{
        if(val.name == args[0] || val.model == args[0] || val.price == args[0] || val.size == args[0] || val.color == args[0] || val.gender == args[0])
          return val;
      })
      return result;
    }
    return value;    
  }

}
