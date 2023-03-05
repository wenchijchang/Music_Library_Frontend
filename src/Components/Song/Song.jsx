import React from "react";
import DeleteSong from "../DeleteSong/DeleteSong";

const Song = ({ song, getAllSongs }) => {
  return (
    <li>
      <div className="container">
        <div>{"Title: " + song.title}</div>
        <div>
          {"Artist: " + song.artist + " "}
          {"Album: " + song.album + " "}
          {"Release Date: " + song.release_date + " "}
          {"Genre: " + song.genre}
        </div>
        <DeleteSong id={song.id} getAllSongs={getAllSongs} />
      </div>
    </li>
  );
};

export default Song;
