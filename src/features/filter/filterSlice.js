const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: "All",
  search: "",
};

const filterSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    filterSelected: (state, action) => {
      state.filter = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterSelected, search } = filterSlice.actions;
