import { format, parseISO } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'

const PostLayout = ({ children, title, date }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className='mx-auto max-w-2xl py-16'>
        <div className='mb-6 text-center'>
          <Link href='/'>
            <a className='text-center text-sm font-bold uppercase text-blue-700'>Home</a>
          </Link>
        </div>
        <div className='mb-6 text-center'>
          <h1 className='mb-1 text-3xl font-bold'>{title}</h1>
          <time dateTime={date} className='text-sm text-slate-600'>
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
        </div>
        {children}
      </article>
    </>
  )
}

export default PostLayout
