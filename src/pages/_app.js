import "@/styles/globals.css"
import Header from "@/components/Header"
const App = ({ Component, pageProps }) => (
  <div className="dark:bg-gray-800 dark:text-white">
    <Header />
    <Component {...pageProps} />
 </div>
)
export default App