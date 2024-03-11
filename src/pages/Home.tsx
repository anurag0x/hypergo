import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getAllVideosApi } from "../store/videos.api";
import VideoCard from "../components/VideoCard";
import HomeLoadingSkeleton from "../components/HomeLoadingSkeleton";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>();
  const { loading, data } = useSelector(
    (store: RootState) => store.videosManager
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 10;

  useEffect(() => {
    dispatch(getAllVideosApi(`page=${currentPage}`));
  }, [currentPage, dispatch]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // console.log("data:", data);
  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center justify-center w-11/12 m-auto">
        {[0,1,2,3,4,5,6,7,8,9].map((el) => (
          <HomeLoadingSkeleton key={el} />
        ))}
      </div>
    );
    return (
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center justify-center w-11/12 m-auto">
          {data?.posts?.map((video) => (
            <Link to={`/details/${video.postId}/${currentPage}`} key={video.postId}>
              <div className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
                <VideoCard
                  thumbnail={video.submission.thumbnail}
                  title={video.submission.title}
                  userAvatar={video.creator.pic}
                  userName={video.creator.name}
                  userHandle={video.creator.handle}
                  likeCount={video.reaction.count}
                  commentCount={video.comment.count}
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-5 gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-md ${
              currentPage === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <button
            disabled
            className="px-4 py-2 bg-blue-100 text-black rounded-md"
          >
            {currentPage}
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className={`px-8 py-2 rounded-md ${
              currentPage === totalPages - 1
                ? "bg-gray-500 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    );
    
};

export default Home;
