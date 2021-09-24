import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import Slide from './Slide';


export default () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const LoadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list)
    }

    LoadAll();
  },[])



  return (
    <div className="pagina">
      <section className="lista">
        
      {movieList.map((item, key) => (
        console.log(item.items,'fora'),
          <Slide key={key} title={item.titulo} items={item.items} />
      ))}
       
      </section>
    </div>
    
  )
}






/*
export default () => {

  useEffect(() => {
    const LoadAll = async () => {
      let lista = await tmdb.getHomeList();
      console.log(lista);
    }
    LoadAll();
  },[])

  return (
    <div className='page'>
      ola, mundo!
    </div>
  )
}

*/