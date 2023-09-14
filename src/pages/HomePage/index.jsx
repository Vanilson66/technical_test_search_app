import Header from './header'
import Search from './search'
import Footer from './footer'
import './style.css'

export default () => {
      
      return (
            <section className='home_page'>
                  <Header/>
                  <Search/>
                  <Footer/>
            </section>
      )
}