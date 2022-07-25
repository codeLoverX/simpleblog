import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className="px-4 mb-12 flex flex-row justify-around py-16 bg-orange-100 text-center">
            <div className="font-bold">
              <div className=" flex flex-row justify-center">
                <span className="-mt-2 pr-2">
                  <Image
                    src="/images/blog.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </span>
                <p className='text-2xl hover:text-red-600 md:text-3xl'>SIMPLE BLOG</p>
              </div>
            </div>
            <div>
              <span className='mr-8 hover:text-red-600'>
                <Link href="">Sign up</Link>
              </span>
              <span className='mr-2 hover:text-red-600'>
                <Link href="">Log in</Link>
              </span>
            </div>
          </div>
    )
}

export default Navbar

