import { Pipe, PipeTransform } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
// Es una manera de manipular/transformar la data de
// ArraysList, string, int, etc para sacar una nueva data
export class OrderListPipe implements PipeTransform {

  transform(
    value: Array<any>, 
    args: string | null = null, 
    sort: string = 'asc'
  ): TracksModel[] {
    
    try {

      if (args === null) {
        return value;
      }

      const tmpList: any = value.sort((a,b) => {

        if (a[args] < b[args]) {
          return -1
        }else if (a[args] === b[args]) {
          return 0;
        } else if (a[args] > b[args]) {
          return 1;
        }
        return 1;
      })

      return (sort === 'asc') ? tmpList : tmpList.reverse();

    } catch (error) {
      console.log("Algo paso al ordenar los valores!");
      return value;
    }
    
    return [];
  }

}
