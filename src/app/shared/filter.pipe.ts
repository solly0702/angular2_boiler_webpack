import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(datas: string[], term: string): any {
    if(term === undefined) return datas;
    return _.filter(datas, (data) => {
      return _.includes(_.toLower(data.name), _.toLower(term));
    })
  }
}
