import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SideMenuOpenState {
  isSideMenuOpen: boolean;
}

const initialState: SideMenuOpenState = {
  isSideMenuOpen: false,
};

export const sidebarSlice = createSlice({
  name: 'sideMenuOpen',
  initialState,
  reducers: {
    toggleSideMenu(state, action: PayloadAction<boolean>) {
      state.isSideMenuOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
