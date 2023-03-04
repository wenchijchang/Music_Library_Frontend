import React, { useState } from "react";
import Input from "../Input/Input";
import axios from "axios";

// async function addNewSong(song){
//     await axios({
//     method: 'post',
//     url: 'http://127.0.0.1:8000/music/',
//     headers: {},
//     data: song
//   });

const AddNewSong = ({ getAllSongs }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  // const [likes, setLikes] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: releaseDate,
      genre: genre,
      // likes: 0,
      // dislikes: 0,
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/api/music/",
      newSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
    setTitle("");
    setArtist("");
    setAlbum("");
    setReleaseDate("");
    setGenre("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div> */}
        <Input
          label={"Title"}
          type={"text"}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          label={"Artist"}
          type={"text"}
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
        <Input
          label={"Album"}
          type={"text"}
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
        <Input
          label={"Release Date"}
          type={"date"}
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
        <Input
          label={"Genre"}
          type={"text"}
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        {/* <div>
          <label>Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Album</label>
          <input
            type="text"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Release Date</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(event) => setReleaseDate(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          ></input>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewSong;
