import React from "react";
import axios from "axios";

const DeleteSong = ({ id, getAllSongs }) => {
  const handleClick = async (event) => {
    event.preventDefault();
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/music/${id}/`
    );
    if (response.status === 204) {
      getAllSongs();
    }
  };
  return <button onClick={(e) => handleClick(e)}>Delete</button>;
};
export default DeleteSong;

// async function deleteSong(song){
//   await axios({
//   method: 'delete',
//   url: `http://127.0.0.1:8000/music/${song.id}/`,
// }
