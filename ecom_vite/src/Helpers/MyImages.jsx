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
    <div className="flex flex-row gap-4 align-middle justify-center md:p-7 ">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={mainImage.url}
            alt={mainImage.filename}
          />
        </div>
        <div className="grid grid-cols-5 gap-4 justify-center ">
          {imgs.slice(1).map((item, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={item.url}
                alt={item.filename}
                onClick={() => {
                  setMainImage(item);
                  setCurrentIndex(index + 1);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyImages;
