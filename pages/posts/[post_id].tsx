import type { NextPage } from 'next'
import Navbar from '../../components/allPostPage/Navbar'
import Card, { CardProps } from '../../components/shared/Card'
import MainLayout from '../../layouts/MainLayout'
import { useRouter } from 'next/router'
import Comment, { CommentProps } from '../../components/[post]/Comment'
import { useState } from 'react'

let card: CardProps =
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
let comments: Array<CommentProps> = [{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
},
{
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
},
{
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
}
]

const Home: NextPage = () => {
    const router = useRouter()
    const { post_id } = router.query
    let [search, setSearch] = useState('')
    return (
        <MainLayout>
            <header className="">
                <Navbar />
            </header>
            <main className="px-12 lg:w-7/12 mx-auto">
                <div className='grid grid-cols-1'>
                    <Card {...card} />
                    <div className='align-center mt-8 mb-6'>
                        <h1 className='text-red-600 text-2xl lg:text-3xl '>Latest comments</h1>
                        <div className='mt-4'>
                            <label className='leading-10'>Search by...</label>
                            <select name="searchOption" id="searchOption" className='input-primary mx-2'>
                                <option value="name">Name</option>
                                <option value="email">Email</option>
                                <option value="body">Body</option>
                            </select>
                            <input type="search"
                                id="default-search"
                                className="input-primary mr-2"
                                placeholder="Search comments..."
                                required />
                            <button
                                type="submit"
                                className="btn-primary">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className='pl-3 border-orange-300'>
                        {
                            comments.map((value: CommentProps) => {
                                return (
                                    <Comment key={value.id} {...value} />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}

export default Home
