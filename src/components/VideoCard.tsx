import React from "react";


interface VideoCardProps {
  thumbnail: string;
  title: string;
  userAvatar: string;
  userName: string;
  userHandle: string;
  likeCount: number;
  commentCount: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  userAvatar,
  userName,
  userHandle,
  likeCount,
  commentCount,
}) => {
  return (
    <div className="bg-white border text-black border-gray-200 rounded-3xl shadow">
      <img className="w-full rounded-t-3xl" src={thumbnail} alt="Video Thumbnail" />
      <div className="px-6 py-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <div className="flex items-center mb-2 gap-2">
          <img
            className="w-10 h-10 rounded-full shadow-lg"
            src={userAvatar}
            alt={userName}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">
              {userName}
            </p>
            <p className="text-sm">
              {userHandle}
            </p>
          </div>
        </div>
      
    
      </div>
    </div>
  );
};

export default VideoCard;
