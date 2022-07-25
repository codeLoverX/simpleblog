import Head from 'next/head'
import Link from 'next/link'
import { memo } from 'react'

export type CardProps = {
    title: string,
    body: string,
    id: number,
    userId: number
}

type ComponentProps = CardProps & {
    allPostsPage?: boolean
}

const CardBody = (props: ComponentProps) => {
    return (
        <>
            <div className='rounded-lg shadow-gray-300 shadow-lg hover:shadow-gray-400 ring-1 py-12 px-10 collapse ring-orange-500'>
                <h1 className='mb-4 text-lg font-bold'> {props.title} </h1>
                <p className='mb-4'> {props.body} </p>
            </div>
        </>

    )
}


const Card = memo((props: ComponentProps) => {
    return (
        <>
            {props.allPostsPage ?
                <Link href={`posts/${props.id}`}>
                    <a target="_blank">
                        <CardBody {...props} />
                    </a>
                </Link>
                :
                <CardBody {...props} />
            }
        </>

    )
})

export default Card

