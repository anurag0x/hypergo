import { IVideoData } from "../types/videos.types";
import { VIDEOS_ERROR, VIDEOS_LOADING, VIDEOS_SUCCESS } from "./videos.types";

export const loadVideos = () => ({ type : VIDEOS_LOADING })
export const errorVideos = () => ({ type : VIDEOS_ERROR })
export const successVideos = (payload : IVideoData) => ({ type : VIDEOS_SUCCESS , payload })