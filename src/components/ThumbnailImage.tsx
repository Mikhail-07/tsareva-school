"use client"
import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react'
import { IoMdClose } from 'react-icons/io';

interface ThumbnailImageProps{
  img: StaticImageData 
}

const ThumbnailImage: FC<ThumbnailImageProps> = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="relative cursor-pointer w-24 h-full"
        onClick={handleImageClick}
      >
        <Image
          src={img}
          alt="Thumbnail"
          layout="responsive"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {isModalOpen && (
        <div onClick={closeModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-full max-h-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 m-4 text-white text-3xl font-bold"
            >
              <IoMdClose size={24}/>
            </button>
            <div className="max-w-screen max-h-screen overflow-auto">
              <Image
                src={img}
                alt="Full-size image"
                layout="intrinsic"
                objectFit="contain"
                className="rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ThumbnailImage