import { useState, useEffect } from 'react'
import { getUrlParams } from '../../utils/UrlTools'
import { filterInput } from '../../utils/FilterTools'
import animalsApi from '../../assets/data/animals';
import './style.css'

import Header from '../../components/HeaderBar'
import InputSearch from '../../components/InputSearch'
import OpenedItem from '../../components/OpenedItem'
import { renderResults } from './RenderLinks';

export default () => {
      const [animalsData, setAnimalsData] = useState([])
      const [animalSelected, setAnimalSelected] = useState(null)
      const searchInput = getUrlParams("q")

      useEffect(() => {
            const animals = animalsApi
            setAnimalsData(filterInput(animals, searchInput))
      }, [searchInput]);

      return (
            <section className="search_results_page">
                  <Header>
                        <a href='/'>
                              <img
                                    src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                                    alt="google_logo" 
                                    style={{ margin: "10px 25px" }}
                                    width={80}
                              />
                        </a>
                        <InputSearch initialValue={searchInput}/>
                  </Header>
                  
                  <section className="results_container">
                        <div className="list_links_results">
                              {renderResults({searchInput, animalsData, setAnimalSelected})}
                        </div>


                        {animalSelected && (
                              <div className="link_open_display" onClick={() => setAnimalSelected(null)}>
                                    <OpenedItem
                                          image={animalSelected.image}
                                          url={animalSelected.url}
                                          title={animalSelected.title}
                                          description={animalSelected.description}
                                    /> 
                              </div>
                        )}
                  </section>  
            </section>
      )
}