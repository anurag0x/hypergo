import { useEffect, useState } from "react";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";


const Reactions = ({ id, initialLikes }: { id:string | undefined, initialLikes: number }) => {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [dislikes, setDislikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);

  //get all the reaction data from local storage
  useEffect(() => {
    const storedData = localStorage.getItem(`${id}-reactions`);
    if (storedData) {
      const { likes, dislikes, liked, disliked } = JSON.parse(storedData);
      setLikes(likes);
      setDislikes(dislikes);
      setLiked(liked);
      setDisliked(disliked);
    }
  }, []);

  // store all the reaction data in local storage
  const handleSetItem = () => {
    localStorage.setItem(
      `${id}-reactions`,
      JSON.stringify({ likes, dislikes, liked, disliked })
    );
  }
  useEffect(() => {
    handleSetItem()
  }, [likes, dislikes, liked, disliked]);

  const handleLikeClick = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button
          onClick={handleLikeClick}
          className={`flex items-center gap-1 ${
            liked ? "text-blue-500" : "text-gray-700 dark:text-gray-400"
          }`}
        >
          <GrLike />
          <p className="font-normal">{likes}</p>
        </button>
        <button
          onClick={handleDislikeClick}
          className={`flex items-center gap-1 ${
            disliked ? "text-red-500" : "text-gray-700 dark:text-gray-400"
          }`}
        >
          <GrDislike />
          <p className="font-normal">{dislikes}</p>
        </button>
      </div>
    </div>
  );
};

export default Reactions;
