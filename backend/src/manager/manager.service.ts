import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { Observable, pipe, tap, map } from 'rxjs'
import { Post } from './dtos';
import { AxiosResponse } from 'axios'


@Injectable()
export class ManagerService {
    BASEURL: string = "https://jsonplaceholder.typicode.com"
    constructor(private readonly httpService: HttpService) { }
    fetchUrl(urlPart: string): Observable<AxiosResponse<Array<Post>>> {
        return this.httpService.get(`${this.BASEURL}/${urlPart}`)
            .pipe(
                map((axiosResponse: AxiosResponse) => {
                    return axiosResponse.data;
                }),
                tap(data => console.log(data))
            )
    }
    findAll() {
        return this.fetchUrl('posts')
    }
}