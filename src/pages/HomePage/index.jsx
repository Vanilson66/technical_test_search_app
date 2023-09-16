import Header from '../../components/HeaderBar'
import Content from './Content'
import Footer from './Footer'
import './style.css'

export default () => {
      
      return (
            <section className='homepage'>
                  <Header>
                        <span style={{ margin: "0 25px" }}>
                              <strong>Agile Content </strong>Frontend test</span>
                  </Header>
                  <Content/>
                  <Footer/>
            </section>
      )
}