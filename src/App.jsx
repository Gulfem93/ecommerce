import './App.css'
import Header from './layout/Header.jsx'
import PageContent from './layout/PageContent.jsx'

import headerBackground from "./image/background_image.png";
function App() {

  return (
    <>

      <div className='app' style={{ backgroundImage: `url(${headerBackground})` }}>
        <div>
          <Header />
          <PageContent />
        </div>

      </div>

    </>
  )
}

export default App
