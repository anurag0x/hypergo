import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getAllVideosApi } from "../store/videos.api";
import DetailsLoadingSkeleton from "../components/DetailsLoadingSkeleton";
import Comments from "../components/Comments";
import Reactions from "../components/Reactions";

const Details = () => {
  const { id, page } = useParams<{ id: string; page: string }>();
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>();
  const { loading, data } = useSelector(
    (store: RootState) => store.videosManager
  );

  // Find the video with the matching ID
  const video = data?.posts?.find((video) => video.postId === id);

  useEffect(() => {
    dispatch(getAllVideosApi(`page=${page}`));
  }, [page, dispatch]);
  console.log(data);
  if (loading || !video) return <DetailsLoadingSkeleton />;

  return (
    <div>
      <div className="container mx-auto flex flex-col items-center justify-center align-center w-11/12 m-auto gap-4 mb-8">
        <div className="w-full md:w-thirtyPercent  rounded-lg">
          {/* Video Player */}
          <video controls autoPlay className="w-full rounded-lg">
            <source src={video.submission.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-seventyPercent md:ml-4 mt-4 md:mt-0 flex flex-col border-red-400 gap-8">
          {/* Details */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {video.submission.title}
          </h2>
          <p className="text-2xl text-black dark:text-black">
            {video.submission.description}
          </p>
          <div className="flex items-center align-center gap-2">
            <img
              className="w-10 h-10 rounded-full shadow-lg "
              src={video.creator.pic}
              alt={video.creator.name}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-black truncate dark:text-white">
                {video.creator.name}
              </p>
              <p className="text-sm text-blacktruncate dark:text-black">
                {video.creator.handle}
              </p>
            </div>
          </div>
          <Reactions id={id} initialLikes={video.reaction.count} />
        </div>
      </div>
      <Comments id={id}  />
    </div>
  );
};

export default Details;
