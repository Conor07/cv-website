import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

// Types:

export type CurrentScreen = {
  screen: string | null;
  intersectionRatio: number;
  screenYPosition: number;
};

type InitialState = {
  currentScreen: CurrentScreen;
  headerHeight: number;
};

// Inital State:

const initialState: InitialState = {
  currentScreen: { screen: null, intersectionRatio: 0, screenYPosition: -1 },
  headerHeight: 0,
};

// Reducers:

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentScreen: (
      state,
      action: PayloadAction<{
        currentScreen: string | null;
        currentScreenIntersectionRatio: number;
        currentScreenYPosition: number;
      } | null>
    ) => {
      if (action.payload === null) {
        state.currentScreen.screen = null;
        state.currentScreen.intersectionRatio = 0;
        state.currentScreen.screenYPosition = -1;
      } else {
        state.currentScreen.screen = action.payload.currentScreen;
        state.currentScreen.intersectionRatio =
          action.payload.currentScreenIntersectionRatio;
        state.currentScreen.screenYPosition =
          action.payload.currentScreenYPosition ?? -1;
      }
    },
    setHeaderHeight: (state, action: PayloadAction<number>) => {
      state.headerHeight = action.payload;
    },
  },
});

// Actions:

export const setCurrentScreen = navigationSlice.actions.setCurrentScreen;

export const setHeaderHeight = navigationSlice.actions.setHeaderHeight;

// Selectors:

export const selectCurrentScreen = (state: RootState) =>
  state.navigation.currentScreen;

export const selectHeaderHeight = (state: RootState) =>
  state.navigation.headerHeight;
