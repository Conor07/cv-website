import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

export type CurrentScreen = {
  screen: string | null;
  intersectionRatio: number;
};

type InitialState = {
  currentScreen: CurrentScreen;
};

const initialState: InitialState = {
  currentScreen: { screen: null, intersectionRatio: 0 },
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentScreen: (
      state,
      action: PayloadAction<{
        currentScreen: string | null;
        currentScreenIntersectionRatio: number;
      } | null>
    ) => {
      console.log("setCurrentScreen action.payload: ", action.payload);
      if (action.payload === null) {
        state.currentScreen.screen = null;
        state.currentScreen.intersectionRatio = 0;
      } else {
        state.currentScreen.screen = action.payload.currentScreen;
        state.currentScreen.intersectionRatio =
          action.payload.currentScreenIntersectionRatio;
      }
    },
  },
});

export const setCurrentScreen = navigationSlice.actions.setCurrentScreen;

export const selectCurrentScreen = (state: RootState) =>
  state.navigation.currentScreen;
