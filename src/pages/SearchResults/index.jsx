import { useLocation } from 'react-router-dom';

import SearchBar from '../../components/SearchBar'

const getUrlParams = () => {
      const { search } = useLocation();
      const queryParams = new URLSearchParams(search);
      const a = queryParams.get('q');
      return a
}

export default () => {

      return (
            <>
                  <SearchBar/>
            </>
      )
}