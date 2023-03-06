import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import AddNewSong from "./Components/AddNewSong/AddNewSong";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="border-box">
              <AddNewSong getAllSongs={getAllSongs} />
            </div>
          </div>
          <div className="col-md-6">
            <SearchBar userInput={userInput} setUserInput={setUserInput} />
            <DisplaySongs
              getAllSongs={getAllSongs}
              songs={songs}
              userInput={userInput}
            />
          </div>
        </div>
      </div>
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
