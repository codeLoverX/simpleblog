import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { Observable, pipe, mergeMap, tap, map, catchError, take, isObservable } from 'rxjs'
import { Comment, Post } from './dtos';
import { AxiosResponse } from 'axios'


@Injectable()
export class ManagerService {
    BASEURL: string = "https://jsonplaceholder.typicode.com"
    constructor(private readonly httpService: HttpService) { }
    fetchUrl<T>(urlPart: string, TCtor: new (...args: any[]) => T): Observable<AxiosResponse<T>> {
        let typeReference = new TCtor()
        let isArray = Array.isArray(typeReference)
        let observabele = this.httpService.get(`${this.BASEURL}/${urlPart}`)
            .pipe(
                map((axiosResponse: AxiosResponse) => {
                    return axiosResponse.data;
                })
            )
        if (!isArray) observabele = observabele.pipe(mergeMap(user => user)) as Observable<AxiosResponse<T>>
        observabele = observabele.pipe(tap(data => console.log(data))) as Observable<AxiosResponse<T>>
        return observabele
    }
    findAllPosts(): Observable<AxiosResponse<Array<Post>>> {
        return this.fetchUrl('posts', Array<Post>)
    }
    findPostById(post_id: number): Observable<AxiosResponse<Post>> {
        return this.fetchUrl(`posts?id=${post_id}`, Post)
    }
    findCommentsByPostId(comment_id: number): Observable<AxiosResponse<Array<Comment>>> {
        return this.fetchUrl(`comments?postId=${comment_id}`, Array<Comment>)
    }
}