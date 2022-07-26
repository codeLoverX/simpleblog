import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { Observable, mergeMap, tap, map, identity, filter } from 'rxjs'
import { Comment, Post } from './dtos';
import { AxiosResponse } from 'axios'
import { PaginateArgs } from './dtos/inputs';


@Injectable()
export class ManagerService {
    BASEURL: string = "https://jsonplaceholder.typicode.com"
    constructor(private readonly httpService: HttpService) { }
    fetchUrl<T>(urlPart: string, TCtor: new (...args: any[]) => T, args?: PaginateArgs): Observable<T> {
        let typeReference = new TCtor()
        let isArray = Array.isArray(typeReference)
        let observabele = this.httpService.get(`${this.BASEURL}/${urlPart}`)
            .pipe(
                // extract data variable and paginate it
                map((axiosResponse: AxiosResponse) => {
                    console.log({ args })
                    if (args === undefined) return axiosResponse.data
                    // its nested data on which we do the pagination */
                    else return axiosResponse.data.filter((_, index) => index > args.skip && index <= args.skip + args.take)
                }),
                /* For those expecting a single object we are converting a single object as a single object {name, id, data} 
                NOT as a an array with single element[{name, id, data}] 
                 Because axios returns a response.data object that WILL ALWAYS be an array of objects
                 */
                (!isArray ? (mergeMap(response => response as Observable<T>)) : identity),
                // tap(data => console.log(data))
            ) as Observable<T>
        return observabele
    }
    findAllPosts(args: PaginateArgs): Observable<Array<Post>> {
        return this.fetchUrl('posts', Array<Post>, args)
    }
    findPostById(post_id: number): Observable<Post> {
        return this.fetchUrl(`posts?id=${post_id}`, Post)
    }
    findCommentsByPostId(comment_id: number, args: PaginateArgs): Observable<Array<Comment>> {
        return this.fetchUrl(`comments?postId=${comment_id}`, Array<Comment>, args)
    }
    findCommentsBySearch(searchString: string, filterKey: string): Observable<Array<Comment>> {
        return this.fetchUrl(`comments`, Array<Comment>).pipe(map(comments => {
            return comments.filter((comment) => {
                let commentPart = comment[filterKey] as String
                commentPart = commentPart.toLowerCase()
                return commentPart.includes(searchString)
            })
        }))

    }
}