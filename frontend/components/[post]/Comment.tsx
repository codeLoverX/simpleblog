import Head from 'next/head'
import Link from 'next/link'

export type CommentProps = {
    name: string,
    body: string,
    postId: number,
    id: number,
    email: string,
}
const Comment = (props: CommentProps) => {
    return (
        <div className='border-l-4 py-2 my-4 rounded-sm ml-8 border-orange-300'>
            <div>
                <span className="rounded-full mr-3 inline-block ml-4 w-8 h-8 text-center leading-7 font-bold bg-blue-300">
                    {props.name.toUpperCase()[0]}
                </span>
                <span className='font-bold inline-block text-sm'>
                    {props.name}
                </span>
            </div>
            <div>
                <span className='ml-16 text-sm'>{props.email.toLowerCase()}</span>
            </div>
            <div className='ml-2 mt-4 pl-3'>
                <h1 className='mb-4 '> {props.body} </h1>
            </div>
        </div>
    )
}

export default Comment

