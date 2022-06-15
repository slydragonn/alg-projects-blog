import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import PostLayout from '../../components/layouts/post'

const Post = ({ post }) => {
  const MdxBody = useMDXComponent(post.body.code)

  return (
    <PostLayout title={post.title} date={post.title}>
      <MdxBody />
    </PostLayout>
  )
}

export async function getStaticPaths () {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return {
    props: {
      post
    }
  }
}

export default Post
