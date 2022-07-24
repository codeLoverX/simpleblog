import type { NextPage, GetStaticProps } from 'next'
import Navbar from '../components/allPostPage/Navbar'
import Card, { CardProps } from '../components/shared/Card'
import MainLayout from '../layouts/MainLayout'
import { myFetcher } from '../utilities/fetcher'

interface IStaticProps {
  cards: Array<CardProps>,
  error: boolean
}

export const getStaticProps: GetStaticProps = async () => {
  const cards = await myFetcher('posts')
  if ('error' in cards) {
    return {
      redirect: {
        destination: '/posts/1', permanent: false,
      }
    }
  }
  else {
    return {
      props: { cards }
    }
  }
}

const Home: NextPage<IStaticProps> = ({ cards, error }) => {
  return (
    <MainLayout>
      <header>
        <Navbar />
      </header>
      <main className="px-12 lg:px-48">
        <h1 className='text-red-600 text-2xl md:text-3xl mb-4'>ALL POSTS</h1>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {error ?
            <>Error fetching</>
            :
            <>

              {cards.map((value: CardProps) => {
                return (
                  <Card key={value.id} allPostsPage={true} {...value} />
                )
              })
              }
              {
                cards.length === 0 &&
                <>No posts to show</>
              }
            </>
          }
        </div>
      </main>
    </MainLayout>
  )
}

export default Home
