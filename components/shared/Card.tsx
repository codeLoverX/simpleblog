import Head from 'next/head'
import Link from 'next/link'

export type CardProps = {
    title: string,
    body: string,
    id: number,
    userId: number
}
const Card = (props: CardProps) => {
    return (
        <Link href={`posts/${props.id}`}>
            <a target="_blank">
                <div className='rounded-lg shadow-gray-300 shadow-lg hover:shadow-gray-400 ring-1 py-12 px-10 collapse ring-orange-500'>
                    <h1 className='mb-4 text-3xl font-bold uppercase'> {props.title} </h1>
                    <p className='mb-4'> {props.body} </p>
                    <span className='text-red-500 underline underline-offset-4'> Click to view post </span>

                </div>
            </a>
        </Link>
    )
}

export default Card

