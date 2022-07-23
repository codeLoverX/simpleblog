import type { NextPage } from 'next'
import Navbar from '../../components/allPostPage/Navbar'
import Card, { CardProps } from '../../components/shared/Card'
import MainLayout from '../../layouts/MainLayout'
import { useRouter } from 'next/router'

let card: CardProps =
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

const Home: NextPage = () => {
    const router = useRouter()
    const { post_id } = router.query
    return (
        <MainLayout>
            <header className="container">
                <Navbar />
            </header>
            <main className="container px-12 md:px-48">
                <h1 className='text-red-600 text-2xl md:text-3xl mb-4'>ALL POSTS</h1>
                <div className='grid grid-cols-1'>
                    <Card {...card} />
                </div>
            </main>
        </MainLayout>
    )
}

export default Home
