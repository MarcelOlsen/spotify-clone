"use client";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();

  const onClick = () => {
    if (!user) return authModal.onOpen();

    //TODO: check for subscription

    return uploadModal.onOpen();
  };

  return (
    <div className="felx flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your library</p>
        </div>
        <AiOutlinePlus
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};

export default Library;
