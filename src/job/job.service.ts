import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JobService {
  constructor(private readonly httpService: HttpService) {}

  // findAll(): Observable<AxiosResponse<[]>> {
  //   return this.httpService.get(
  //     'http://dev3.dansmultipro.co.id/api/recruitment/positions.json',
  //   );
  // }

  findAll() {
    return this.httpService
      .get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
      .pipe(map((response) => response.data));
  }

  findOne(id) {
    return this.httpService
      .get('http://dev3.dansmultipro.co.id/api/recruitment/positions/' + id)
      .pipe(map((response) => response.data));
  }

  findSearch(desc: string, loc: string) {
    return this.httpService
      .get(
        'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=' +
          desc +
          '&location=' +
          loc,
      )
      .pipe(map((response) => response.data));
  }
}
