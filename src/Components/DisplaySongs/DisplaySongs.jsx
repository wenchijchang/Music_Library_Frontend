import Song from "../Song/Song";

const DisplaySongs = (props) => {
  return (
    <ul>
      {props.array.map((item) => (
        <SongItem key={item.id} song={item} />
      ))}
    </ul>
  );
};

// [20songs]
// return(
//   <ul>
//     {props.array.map( item => <SongItem key={item.id} song={item}/>)}
//   </ul>
// )
