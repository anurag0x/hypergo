import { IVideoData } from "../types/videos.types";
import { VIDEOS_ERROR, VIDEOS_LOADING, VIDEOS_SUCCESS } from "./videos.types";
import { Reducer } from "@reduxjs/toolkit";

interface VideoState {
  loading: boolean;
  error: boolean;
  data: IVideoData; 
}

const initialState: VideoState = {
  loading: false,
  error: false,
  data: {
    posts: [],
    page: 0,
    offset: 0
  }
};

export const videosReducer : Reducer<VideoState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case VIDEOS_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case VIDEOS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case VIDEOS_SUCCESS: {
      return { data: payload as IVideoData, loading: false, error: false };
    }

    

    default:
      return state;
  }
};