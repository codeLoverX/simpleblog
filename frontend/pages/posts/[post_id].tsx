import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Navbar from '../../components/allPostPage/Navbar'
import Card, { CardProps } from '../../components/shared/Card'
import MainLayout from '../../layouts/MainLayout'
import Comment, { CommentProps } from '../../components/[post]/Comment'
import { FormEvent, useState, useEffect, SyntheticEvent, useMemo } from 'react'
import { myFetcher } from '../../utilities/fetcher'
import { ParsedUrlQuery } from 'querystring'

interface IStaticProps {
    card: CardProps,
    error?: boolean,
    comments: Array<CommentProps>
}

interface IState {
    searchString: string,
    filterKey: 'name' | 'email' | 'body'
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

interface FormElements extends HTMLFormControlsCollection {
    searchString: HTMLInputElement, filterKey: HTMLInputElement
}

interface YourFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

const Home: NextPage<IStaticProps, IState> = ({ card, error, comments }) => {
    const [searchFilter, setSearchFilter] = useState({
        searchString: '', filterKey: 'body'
    })
    console.log({ searchFilter })
    function changeSearchFilter(event: FormEvent<YourFormElement>) {
        event.preventDefault()
        const formElements = event.currentTarget.elements
        setSearchFilter({
            searchString: formElements.searchString.value, filterKey: formElements.filterKey.value
        })
    }
    const customComments: Array<CommentProps> = useMemo(() => {
        let { filterKey, searchString } = searchFilter
        searchString = searchString.toLowerCase()
        if (searchFilter.searchString === '') return [...comments]
        else {
            return comments.filter((comment) => {
                let commentPart = (comment as any)[filterKey] as string
                commentPart = commentPart.toLowerCase()
                return commentPart.includes(searchString)
            })
        }
    }, [searchFilter])

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
                            <form onSubmit={(event) => { changeSearchFilter(event as FormEvent<YourFormElement>) }}>
                                <label className='leading-10'>Search by...</label>
                                <select name="filterKey" id="searchOption" className='input-primary mx-2'>
                                    <option value="name">Name</option>
                                    <option value="email">Email</option>
                                    <option value="body">Body</option>
                                </select>
                                <input type="input"
                                    id="default-search"
                                    className="input-primary mr-2"
                                    name="searchString"
                                    placeholder="Search comments..."
                                    required />
                                <button
                                    type="submit"
                                    className="btn-primary">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='pl-3 border-orange-300'>
                        {
                            customComments?.map((value: CommentProps) => {
                                return (
                                    <Comment key={value.id} {...value} />
                                )
                            })
                        }
                        {
                            customComments?.length === 0 &&
                            <>No comments to show</>
                        }
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}

export default Home
