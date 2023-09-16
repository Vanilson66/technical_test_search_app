import './style.css'

export default ({image, url, title, description}) => {

      return (
            <div className='opened_item_box'>
                  <img className='opened_item_url' src={image} alt="Image Iten"/>
                  <span className='opened_item_url'>{url}</span>
                  <p className='opened_item_title'>{title}</p>
                  <p className='opened_item_url'>{description}</p>
            </div>
      )
}