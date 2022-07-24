import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Navbar from '../../components/allPostPage/Navbar'
import Card, { CardProps } from '../../components/shared/Card'
import MainLayout from '../../layouts/MainLayout'
import { useRouter } from 'next/router'
import Comment, { CommentProps } from '../../components/[post]/Comment'
import { useState } from 'react'
import { myFetcher } from '../../utilities/fetcher'
import { ParsedUrlQuery } from 'querystring'

interface IStaticProps {
    card: CardProps,
    error?: boolean,
    comments: Array<CommentProps>
}


interface IPageParams extends ParsedUrlQuery {
    post_id: string
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { post_id } = context.params as IPageParams;
    const [card, comments] = await Promise.all(
        [
            myFetcher(`posts/${post_id}`),
            myFetcher(`comments?postId=${post_id}`)
        ]
    )
    if ('error' in card) {
        return {
            redirect: {
                destination: '/', permanent: false,
            }
        }
    }
    else {
        return {
            props: { card, comments }
        }
    }
}

const Home: NextPage<IStaticProps> = ({ card, error, comments }) => {
    console.log({comments})
    console.log({card})
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
                        {
                            comments.length === 0 &&
                            <>No comments to show</>
                        }
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}

export default Home
