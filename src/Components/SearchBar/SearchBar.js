import React,{useState,Suspense} from 'react';
import Loader from '../Loader/Loader';
import './SearchBar.css';
const AlbumList = React.lazy(async ()=>{
  await new Promise(resolve=>setTimeout(resolve,2000));
  return import('../AlbumList/AlbumList');
});


const SearchBar = (props) => {
    const [search,setSearch]=useState('');
    const filteredAlbums = props.list.filter(album =>
        album.title.toLowerCase().includes(search.toLowerCase())
      );

    return (
      <div className='general-div'>
         <div className='search-div'>
           <form>
              <input type="text" 
              className='search-input'
              placeholder='Search Photo'
              onChange={e => setSearch(e.target.value)}/>
            </form>
          </div>
          <Suspense fallback={<Loader/>
          }>
      <AlbumList list={filteredAlbums} handle={props.handle}/>
			</Suspense>

      </div>
       
      

          )
  }
  
  export default SearchBar;
  