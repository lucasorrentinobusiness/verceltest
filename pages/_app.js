// `pages/_app.js`
import '../styles/global.css';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
   <> 
      <Component {...pageProps} />
      <Script
  	        src="https://cdn.signalfx.com/o11y-gdi-rum/latest/splunk-otel-web.js"
  	        strategy="lazyOnload"
  	        onLoad={() => {
  	         console.log("Loaded");
  	        }}
  	   />
   </>
  )
}
