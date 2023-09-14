import SearchBar from '../../components/SearchBar/index'

export default () => {
      return (
            <main className='homepage_middle_screen'>
                  <div className="logo">
                        <img 
                              src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                              alt="google_logo" 
                              />
                  </div>

                  <div className="search_area">
                        <SearchBar/>

                        <div className='actions'>
                              <button
                                    style={{
                                          background: "#dfdfdf",
                                          color: "#000"  ,
                                          padding: "10px 15px",
                                          border: "none",
                                          borderRadius: "4px",
                                          fontSize: 15
                                    }}
                                    onClick={() => {}}
                                    >
                                    Buscar
                              </button>
                        </div>
                  </div>
            </main>
      )
}