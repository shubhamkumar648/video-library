import React from 'react'
import { Link } from 'react-router-dom';
import { useVideo } from '../../context/Videocontext'

 export const Categories = () => {
    
    const { state, dispatch } = useVideo();
    const { categories} = state;


  return (
      <div className='flex videoCategories'>
    {categories?.map(({ _id, categoryName,categoryImage }) => {

      return (
        
      
    <Link to="/videolist" key = {_id}>
    <div className="card podcast"    onClick ={() => dispatch({type: "FILTER_CATEGORIES", payload: categoryName})}>

    <img
      src={categoryImage}
      alt="podcast"
      className="img-responsive"
    />
    <p className="categoryName">{categoryName}</p>

  </div>  
  </Link>

    )})}    
   
  
  

  </div>
  )
}

