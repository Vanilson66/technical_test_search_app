import './style.css';

export const ItemResult = (props) => {
      return (
            <div className="item_result">
                  <p className='item_url'>{props.url}</p>
                  <p className='item_title' onClick={() => props.openAside(props)}>{props.title}</p>
                  <p className='item_description'>{props.description}</p>
            </div>
      )
}

export const ItemResultNotFind = ({input, sujestions}) => {
      return (
            <div className="item_result">
                  <p>No results found for '{input || ""}'</p>
                  <p>Try looking for: <strong>insect, fish, horse, crocodila, bear, cetacean, cow, lion, rabit, cat, snake, dog.</strong></p>
            </div>
      )
}

export const ItemEmptyPlace = ({sujestions}) => {
      return (
            <div className="item_result">
                  <p>Try looking for: <strong>insect, fish, horse, crocodila, bear, cetacean, cow, lion, rabit, cat, snake, dog.</strong></p>
            </div>
      )
}