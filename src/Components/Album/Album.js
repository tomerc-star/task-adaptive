import '../Album/Album.css';

const Album = (props) => {
    return (
        <div className='items-div'>
            <div className='item-top'>
                <div className='image-container'>
                    <img className='thumb-img' alt="rr" src={props.albumimage} width="20%" height="80%" onClick={(e)=>{props.handle(props.albumtitle,props.albumimage,props.albumid,props.artist)}}/>
                </div>
            </div>
            <div className='item-bottom'>
                {props.albumtitle}
                <div className='id-container'>
                     Id: {props.albumid}
                </div>
                <div className='link-container'>
                    <form >
                        <input type="text" className='link-input' placeholder='link' value={props.albumimage}/>
                    </form>
                </div>
        
            </div>
      </div>
      

          )
  }
  
  export default Album;
  