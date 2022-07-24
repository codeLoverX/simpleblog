import type { NextPage, GetStaticProps } from 'next'
import Navbar from '../components/allPostPage/Navbar'
import Card, { CardProps } from '../components/shared/Card'
import MainLayout from '../layouts/MainLayout'
import useSWR from 'swr'
import { } from 'next'

let cards: Array<CardProps> = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
]

const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://.../posts')
  const posts = await res.json()
  return {
    props: { cards }
  }
}

const Home: NextPage = () => {
  return (
    <MainLayout>
      <header>
        <Navbar />
      </header>
      <main className="px-12 lg:px-48">
        <h1 className='text-red-600 text-2xl md:text-3xl mb-4'>ALL POSTS</h1>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {
            cards.map((value: CardProps) => {
              return (
                <Card key={value.id} allPostsPage={true} {...value} />
              )
            })
          }
        </div>
      </main>
    </MainLayout>
  )
}

export default Home
