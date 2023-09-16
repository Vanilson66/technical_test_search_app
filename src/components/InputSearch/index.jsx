import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

export default ({initialValue = "", setCanSearch = function(){}, searchEvent}) => {      
      const navigate = useNavigate();
      const [field, setField] = useState(initialValue)
      
      const makeSearch = () => navigate("/search?q=" + field)
      if(searchEvent) makeSearch()
      const erase = () => setField("")

      useEffect(() => {
            field? setCanSearch(true) : setCanSearch(false)
      }, [field])

      return (
            <div className="search_bar">
                  <span className="search_icon hover" >
                        <svg 
                              fill='#555'
                              width={25}
                              onClick={makeSearch}
                              viewBox="0 0 24 24"
                              >
                              <path 
                                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                              </path>
                        </svg>
                  </span>

                  <span className='search_bar_text_input'>
                        <input 
                              value={field} 
                              onChange={v => setField(v.target.value)}
                              placeholder='What animal do you want to know?'/>
                  </span>

                  <span className='seach_erase_icon hover'>
                        {field &&       
                              <svg 
                                    fill='#666'
                                    width={25}
                                    onClick={erase}
                                    viewBox="0 0 24 24"
                                    >
                                    <path 
                                          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                    </path>
                              </svg>
                        }

                  </span>
            </div>
      )
}