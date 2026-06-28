"use client"
import { useRef, useState } from "react";
import styles from './ImageGallery.module.css';
import Image from "next/image";
// TODO: Improve ImageGallery component as originally intended in the design of figma

export default function ImageGallery({ images }) {
  const dialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (<>
    <div className={styles.imageGallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper} onClick={(e) => {
          dialogRef.current.showModal()
          setSelectedImage(image);
        }}>
          <Image src={image.url} alt={image.alt} className={styles.image} width={300} height={200} />
        </div>
      ))}
    </div>

    <dialog className={styles.dialog} ref={dialogRef} closedby="any">
      <div className={styles.dialog_content}>
        <div className={styles.dialog_imageWrapper}>
          <img src={selectedImage?.url} alt={selectedImage?.alt} className={styles.dialog_image} />
        </div>
        <p>{selectedImage?.description}</p>

      </div>

      <form method="dialog">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path d="M1 1L21 21M1 21L21 1" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </form>
    </dialog>
  </>);
}

