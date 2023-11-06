import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("items/fetchData", async () => {
  try {
    const response = await axios.get("http://localhost:5000/");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "rejected";
        // state.error = action.error.message;
      });
  },
});

export const selectItemById = (state, itemId) =>
  state.items.data.find((item) => item.id === itemId);

export default itemsSlice.reducer;
