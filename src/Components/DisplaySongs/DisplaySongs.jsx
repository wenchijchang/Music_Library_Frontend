import Song from "../Song/Song";

const DisplaySongs = (props) => {
  return (
    <ul>
      {props.parentSongs.map((song) => <Song key={song.id} song={song} />)}
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
