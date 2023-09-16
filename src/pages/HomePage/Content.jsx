import { useState } from 'react'
import InputSearch from '../../components/InputSearch'


export default () => {
      const [canSearch, setCanSearch] = useState(false)
      const [searchEvent, setSearchEvent] = useState(false)

      return (
            <main className='homepage_content'>
                  <div className="homepage_logo_container">
                        <img 
                              src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                              alt="google_logo" 
                              />
                  </div>

                  <div className="homepage_seach_container">
                        <InputSearch setCanSearch={setCanSearch} searchEvent={searchEvent} />

                        <div className='tools_container'>
                              <button 
                                    className={"search_action_button "}
                                    style={{ color: !canSearch && "#c0c0c0" }} 
                                    onClick={() => setSearchEvent(true)} 
                                    >
                                    Buscar
                              </button>
                        </div>
                  </div>
            </main>
      )
}