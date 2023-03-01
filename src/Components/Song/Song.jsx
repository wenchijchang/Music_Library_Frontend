const Song = (props) => {
  return (
    <li>
      <div>{props.title}</div>
      <div>{props.artist}</div>
      <div>{props.album}</div>
      <div>{props.releaseDate}</div>
      <div>{props.genre}</div>
    </li>
  );
};

export default Song;
