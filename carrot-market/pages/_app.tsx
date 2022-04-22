import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component);  // -> function Home 이런식으로 호출되네
  console.log(pageProps);  // -> 여긴 뭐지?


  return <Component {...pageProps} />
}

export default MyApp
