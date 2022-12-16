import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtistCard from "../components/cards/ArtistCard";
import { fetchError, fetchStart, fetchSuccess } from "../features/FetchSlice";

const Home = () => {
  const { artist, loading } = useSelector((state) => state.lastfm);
  const dispatch = useDispatch();

  const API_KEY = process.env.REACT_APP_API_KEY;
  // const API_KEY = "901b75981f7cefc5005fad9a870f2e04"
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
  const getTopArtist = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(url);
      const {
        artists: { artist },
      } = data;
      console.log(data.artists.artist);
      dispatch(fetchSuccess(data.artists.artist));
    } catch (error) {
      console.log(error);
      dispatch(fetchError());
    }
  };
  useEffect(() => {
    getTopArtist();
  }, []);

  return (
    <div>
      <h1>Artist List</h1>
      {artist?.map((item, index) => (
        <ArtistCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Home;
