import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artist: [],
  loading: false,
  error: false,
  darkMode: false,
};

const fetchSlice = createSlice({
  name: "lastfm",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.artist = payload;
    },

    fetchError: (state) => {
      state.error = true;
      state.loading = false;
    },
    setDarkMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError, setDarkMode } =
  fetchSlice.actions;

export default fetchSlice.reducer;
