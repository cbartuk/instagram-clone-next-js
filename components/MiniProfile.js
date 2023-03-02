import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://yt3.ggpht.com/yti/AHXOFjVE8pjUQMlf-uebuPfHk91vB7D869FRQwD3_XDxgw=s108-c-k-c0x00ffffff-no-rj"
        alt="profile-pic"
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">cbartuk</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
