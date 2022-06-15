const PostsLayout = ({ children }) => {
  return (
    <div className='mt-8 w-full grid grid-cols-3 justify-items-center'>
      {children}
    </div>
  )
}

export default PostsLayout
