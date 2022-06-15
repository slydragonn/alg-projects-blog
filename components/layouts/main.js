import Head from 'next/head'
import Navbar from '../navbar'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Alejandro's Projects Blog" />
        <meta name='author' content='Alejandro Londoño' />
        <meta name='author' content='slydragonn' />
        <title>Alg Projects - Blog</title>
      </Head>
      <Navbar />
      <div className='w-full flex justify-center items-center mt-16'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
