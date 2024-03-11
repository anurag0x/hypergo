import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { AppDispatch, RootState } from "./store";
import { errorVideos, loadVideos, successVideos } from "./videos.action";
import { toast } from "react-toastify";

export const getAllVideosApi: ActionCreator<ThunkAction<
    void,
    RootState,
    null,
    AnyAction
>> = (queryString = "") => async (dispatch: AppDispatch) => {
    // start loading
    dispatch(loadVideos());

    try {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };
        const res = await fetch(
            `https://internship-service.onrender.com/videos?${queryString}`,
            {
                headers
            }
        );

        const data = await res.json();


        // if request success then store the data otherwise set error
        if (res.ok) dispatch(successVideos(data.data));
        else dispatch(errorVideos());
    } catch (error: any) {
        console.log("error:", error);
        toast.error(error.message);
        dispatch(errorVideos());
    }
};