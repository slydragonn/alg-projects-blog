import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard (post) {
  return (
    <div className='mb-6 flex flex-col w-52 items-start'>
      <div className='min-w-[200px]'>
        <Image
          src={post.image}
          alt={post.title}
          width={200}
          height={150}
          style={{ borderRadius: 10 }}
        />
      </div>
      <h2 className='mb-3'>
        <Link href={post.url}>
          <a className='text-white hover:text-slate-400 duration-200 text-base font-medium'>{post.title}</a>
        </Link>
      </h2>
      <time dateTime={post.date} className='block text-sm text-slate-200'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}
