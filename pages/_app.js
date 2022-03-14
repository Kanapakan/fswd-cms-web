// pages/_app.js
import '../components/Navbar.css'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
  
)
}