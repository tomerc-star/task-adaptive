import '../AlbumList/AlbumList.css';
import Album from "../Album/Album";

const AlbumList = (props) => {
  
    return (
        <div className='items-container'>
          {props.list.map((item,key)=>{ 
            return <Album key={item.id} albumid={item.id} artist={item.artist} albumtitle={item.title} albumimage ={item.image} handle={props.handle}/>;})}
        </div>
          )
  }
  
  export default AlbumList;
  
  