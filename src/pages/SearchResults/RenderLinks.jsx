import { ItemResult, ItemEmptyPlace, ItemResultNotFind } from '../../components/ItemResult'

export const renderResults = ({searchInput, filteredAnimals, setAnimalSelected}) => {
      if(!searchInput) return <ItemEmptyPlace/>
      
      if (!filteredAnimals.length) return <ItemResultNotFind input={searchInput} />

      return filteredAnimals.map((item) => (
            <ItemResult
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  image={item.image}
                  type={item.type}
                  openAside={setAnimalSelected}
            />))
}