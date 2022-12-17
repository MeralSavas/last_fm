import React from "react";
import { useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";

const Details = () => {
  const { name } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const topAlbums = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;
  const topTrack = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;
  console.log(name);

  return (
    <div>
      <TopAlbum />
      <TopTrack />
    </div>
  );
};

export default Details;
