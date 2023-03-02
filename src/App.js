import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNewSong from "./Components/AddNewSong/AddNewSong"
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    // <>
    //   <NavBar />
    //   <AddNewSong />
    //   <SearchBar />
    //   <DisplaySongs />
    // </>
    <div>
      <h1>Music Library</h1>
      <AddNewSong />

      <DisplaySongs parentSongs={songs}/>
      {/* <table>
        <thead>
          <tr>
            <th>Song Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;

// [20songs]
// return(
//   <ul>
//     {props.array.map( item => <SongItem key={item.id} song={item}/>)}
//   </ul>
// )

// const SongItem = (props) => {
//   return (
//     <li>
//       <div>

//       </div>
//     </li>
//    );
// }
