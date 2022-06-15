import MainLayout from '../components/layouts/main'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
