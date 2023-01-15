import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    // 2:06:25
    <div>
      {/* Header */}
      <div>
        <img src={userImg} alt="" />
        <p>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Img */}

      {/* Buttons */}

      {/* Caption */}

      {/* Comments */}

      {/* Input Box */}
    </div>
  );
}

export default Post;
