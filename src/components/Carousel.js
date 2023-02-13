import React, { useState, useEffect, useRef } from 'react';
import "./Carousel.css"
import photos from '../services/photos'

const delay = 3500


function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length)
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prev) =>
          prev === photos.length - 1 ? 0 : prev + 1
        ),
      delay
    );
    return () => { 
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <>
      <div className='carousel'>
        <div className='slider-container'>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={
                photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
              }
            >
              <img src={photo.url} alt={photo.title} className='photo' />
              {/* <div className='caption'>{photo.title}</div> */}
            </div>
          ))}

          <button onClick={prev} className='prev'>
            &lt;
          </button>
          <button onClick={next} className='next'>
            &gt;
          </button>
        </div>

        <div className='dots'>
          {photos.map((photo) => (
            <span
              key={photo.id}
              className={
                photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
              }
              onClick={() => setCurrentIndex(photos.indexOf(photo))}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;