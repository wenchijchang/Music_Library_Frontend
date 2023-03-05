import Song from "../Song/Song";
import "./DisplaySongs.css";

const DisplaySongs = ({ songs, getAllSongs, userInput }) => {
  return (
    <ul className="song-list">
      {songs
        .filter(
          (song) =>
            song.title.toLowerCase().includes(userInput.toLowerCase()) ||
            song.artist.toLowerCase().includes(userInput.toLowerCase()) ||
            song.album.toLowerCase().includes(userInput.toLowerCase()) ||
            song.release_date.toLowerCase().includes(userInput.toLowerCase()) ||
            song.genre.toLowerCase().includes(userInput.toLowerCase())
        )
        .map((song) => (
          <Song key={song.id} song={song} getAllSongs={getAllSongs} />
        ))}
    </ul>
  );
};

export default DisplaySongs;
// [20songs]
// return(
//   <ul>
//     {props.array.map( item => <SongItem key={item.id} song={item}/>)}
//   </ul>
// )
