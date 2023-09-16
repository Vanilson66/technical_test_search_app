import { ItemResult, ItemEmptyPlace, ItemResultNotFind } from '../../components/ItemResult'

export const renderResults = ({searchInput, animalsData, setAnimalSelected}) => {
      if(!searchInput) return <ItemEmptyPlace/>
      
      if (!animalsData.length) return <ItemResultNotFind input={searchInput} />

      return animalsData.map((item) => (
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