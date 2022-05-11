import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './BookByCity.scss'
function BookByCity() {
    const location = useLocation();
    let item = location.search;
  if(item){
   localStorage.setItem("search",JSON.stringify(location.search));
  }  else{
    item = JSON.parse(localStorage.getItem("search"))
  }
    
      const{data, loading,error}=useFetch(`theatre${item}`);
     
  
  return (
      <div className='body'>
          {loading?("Loading please Wait"):(<>
        <h2>Theatres in {data[0]?.city}</h2>
        </>)}
    <div className='theatreIn'>
    
        {/* {
            loading?("Loading please wait"):(<>
            <div className='Item'><img src={data[0].photos[0]} alt="" /></div>
            </>)
        }
        <h2>Theatres in {data[0]?.city}</h2>
        {console.log(data[0].city)} */}
        {loading?("Loading please Wait"):(<>
        {data && data.map((i,j)=>{
        return <div key={j} className='Item'> {i.photos && i.photos.map((x,y)=>{
            return <div  key={y}> <img src={x} alt="" className='Img'/>
            </div>
            
        })}
        <div className='Titles'><h3>{i.name}</h3></div>
        </div>
        
      })}</>)}
        

    </div></div>
  )
}

export default BookByCity