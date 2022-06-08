import React, { useEffect,useState } from 'react';
import './App.css';
import Title from './Components/Title/Title';
import SearchBar from './Components/SearchBar/SearchBar';
import Modal from './Components/Modal/Modal';



function App() {
  const [albumList,setAlbumList]=useState([]);
  const [title,setTitle]=useState('');
  const [image,setImage]=useState('');
  const [id,setId]=useState('');
  const [artist,setArtist]=useState('');
  const [showModal,setShowModal]=useState(false);
  const API_URL = "https://my-json-server.typicode.com/tomerc-star/albumsjson/db";

  const onClick = (titleModal,imageModal,idModal,artistModal)=>{
    setTitle(titleModal);
    setImage(imageModal);
    setId(idModal);
    setArtist(artistModal);
    setShowModal(true);
  };

  const onClose = ()=>{
    setShowModal(false);
  };
  
  useEffect(() => { 
    fetch(API_URL)
    .then(response => response.json())
    .then(res => {
      setAlbumList(res.albums);
  })
  .catch(err => console.error("Error!"));
  },[])


  return (
    <div className="App">
      {showModal && <Modal title={title} id={id} artist={artist} image={image} flag={showModal} onClose={onClose}/>}
      <Title/>
      <SearchBar list={albumList} handle={onClick}/> 
    </div>
  );
}

export default App;
