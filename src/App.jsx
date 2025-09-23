import './App.css'
import About from './layout/About.jsx'
import Footer from './layout/Footer.jsx'
import Header from './layout/Header.jsx'
import PageContent from './layout/PageContent.jsx'
import WorkUs from './layout/WorkUs.jsx'

//import headerBackground from "./image/background_image.png";
//</div><div className='app' style={{ backgroundImage: `url(${headerBackground})` }}>
function App() {

  return (
    <>

      <div className='app'>

        <div>
          <Header />
          <PageContent />
          <About />
          <WorkUs />
          <Footer />
        </div>

      </div>

    </>
  )
}

export default App
