import React from 'react';


const Song = (props) => {
  return (
    <li>
      <div>
        {props.title}
        {props.artist}
        {props.album}
        {props.releaseDate}
        {props.genre}
      </div>
    </li>
  );
};

export default Song;
