"use client"
import { useRef, useState, useEffect } from "react";
import styles from './ImageGallery.module.css';
import Image from "next/image";

export default function ImageGallery({ images }) {
  const dialogRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    dialogRef.current?.showModal();
  };

  const handleClose = () => {
    dialogRef.current?.close();
    setSelectedIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null && images.length > 0) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null && images.length > 0) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!dialogRef.current?.open) return;
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "ArrowLeft") handlePrev(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className={styles.imageGallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper} onClick={() => handleOpen(index)}>
            <Image src={image.url} alt={image.alt || "Gallery image"} className={styles.image} width={400} height={300} />
          </div>
        ))}
      </div>

      <dialog 
        className={styles.dialog} 
        ref={dialogRef} 
        onClose={() => setSelectedIndex(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) handleClose();
        }}
      >
        {selectedImage && (
          <div className={styles.dialog_content}>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {images.length > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous image">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next image">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}

            <div className={styles.dialog_imageWrapper}>
              <img src={selectedImage.url} alt={selectedImage.alt || "Selected gallery image"} className={styles.dialog_image} />
            </div>
            
            {selectedImage.description && (
              <div className={styles.descriptionWrapper}>
                <p>{selectedImage.description}</p>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
