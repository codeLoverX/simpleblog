import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <MainLayout>
        <header className="container">
          <div className="px-4 flex flex-row justify-around pt-16 pb-24 text-center">
            <div className="font-bold text-2xl md:text-3xl">
              <div className=" flex flex-row justify-center">
                <span className="-mt-2 pr-2">
                  <Image
                    src="/images/blog.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </span>
                <p>SIMPLE BLOG</p>
              </div>
            </div>
            <div>
              <span className='mr-2'>
                <Link href="">Sign up</Link>
              </span>
              <span >
                <Link href="">Log in</Link>
              </span>
            </div>
          </div>
        </header>
        <main className="container px-8">

        </main>
    </MainLayout>
  )
}

export default Home
