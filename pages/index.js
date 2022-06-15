import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Category from '../components/category'
import PostsLayout from '../components/layouts/posts'
import PostCard from '../components/post-card'

const Home = ({ posts }) => {
  return (
    <div className='w-full flex justify-center h-96 mt-14 mb-96 text-white'>
      <div className='w-3/5 flex flex-col items-center z-10'>
        <Category />
        <div className='border-t border-b w-full mt-12 text-center'>
          <h2 className='text-lg font-semibold'>Articulos - Proyectos</h2>
        </div>
        <PostsLayout>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </PostsLayout>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default Home
