import '../styles/globals.css'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../pages/header/header'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Header /> 
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
