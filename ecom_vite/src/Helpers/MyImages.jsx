import React, { useState, useEffect } from "react";

const MyImages = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imgs.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % imgs.length;
          setMainImage(imgs[nextIndex]);
          return nextIndex;
        });
      }, 4000); 

      return () => clearInterval(intervalId); 
    }
  }, [imgs]);

  return (
    <div className="flex flex-row gap-7 align-middle justify-center">
      <div className="w-44">
        {imgs.length > 0 ? (
          imgs.map((item, index) => (
            <div className="pb-3" key={index}>
              <img
                src={item.url}
                alt={item.filename}
                onClick={() => {
                  setMainImage(item);
                  setCurrentIndex(index);
                }}
                className="rounded-xl cursor-pointer"
              />
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className="w-80 pt-28">
        <img src={mainImage.url} alt={mainImage.filename} className="rounded-2xl " />
      </div>
    </div>
  );
};

export default MyImages;
