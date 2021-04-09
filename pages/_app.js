import '../styles/globals.css'
import "../styles/style.css"
import { ChakraProvider } from "@chakra-ui/react"

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
