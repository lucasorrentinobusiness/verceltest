// `pages/_app.js`
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
   <> 
      <Component {...pageProps} />
      <Script
  	        src="https://cdn.signalfx.com/o11y-gdi-rum/latest/splunk-otel-web.js"
  	        strategy="lazyOnload"
  	        onLoad={() =>
  	          console.log(`script loaded correctly, window.FB has been populated`)
  	        }
  	   />
   </>
  )
}
