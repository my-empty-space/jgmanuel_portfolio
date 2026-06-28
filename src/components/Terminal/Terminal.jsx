// TODO: Animar clickeo de botones del slider.

'use client';

import { useState, useRef, act } from 'react';

import TwinsLogo from '@/assets/TwinsLogo';
import AnimallLogo from '@/assets/AnimallLogo';
import styles from './Terminal.module.css';

export default function Header() {
  const [contentTranslate, setContentTranslate] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
  const contentRef = useRef(null);

  const handleNext = () => {
    if (contentRef.current?.children[currentItem + 1] === undefined) {
      setContentTranslate(0);
      setCurrentItem(0);
    } else {
      const translateDistance =
        contentRef.current.children[currentItem].offsetHeight + 400;

      setContentTranslate(contentTranslate - translateDistance);
      setCurrentItem(currentItem + 1);
    }
  };

  const handlePrev = () => {
    const element = contentRef.current?.children[currentItem - 1];
    let translateDistance = 0;

    if (element === undefined) {
      translateDistance = contentRef.current.offsetHeight;
      translateDistance -=
        contentRef.current?.children[contentRef.current.children.length - 1]
          .offsetHeight;

      setContentTranslate(translateDistance * -1);
      setCurrentItem(contentRef.current.children.length - 1);
    } else {
      translateDistance = element.offsetHeight + 400;

      setContentTranslate(contentTranslate + translateDistance);
      setCurrentItem(currentItem - 1);
    }
  };

  return (
    <div className={styles.componentWraper}>
      <div className={styles.terminal}>
        <div className={styles.terminal_frame}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.terminal_input}>
          <img src="/shell-line.png" alt="" />
          <p>
            <span>git</span> pull featured-experience main
          </p>
        </div>

        <div
          ref={contentRef}
          className={styles.terminal_content}
          style={{ transform: `translateY(${contentTranslate}px)` }}
        >
          <div className={styles.terminal_item}>
            <div className={styles.terminal_item_text}>
              <p>
                <span>Proyect Name:</span> Twins Concrete <br />
                <span>Demo Url:</span>{' '}
                <a href="https://tctwinconcrete.com/" target="_blank">
                  https://tctwinconcrete.com/
                </a>
              </p>

              <p className={styles.terminal_item_description}>
                Solor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore e t dolore mas na aliqua. Sed
                pulvinar proin gravida hendrerit lectus a. Porta lorem mollis
                aliquam ut porttitor leo. Magna sit amet purus gravida quis
                blandit turpis. Vel eros donec
              </p>
            </div>

            <TwinsLogo />
          </div>

          <div className={styles.terminal_item}>
            <div className={styles.terminal_item_text}>
              <p>
                <span>Proyect Name:</span> Twins Concrete <br />
                <span>Demo Url:</span>{' '}
                <a href="https://tctwinconcrete.com/" target="_blank">
                  https://tctwinconcrete.com/
                </a>
              </p>

              <p className={styles.terminal_item_description}>
                Solor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore e t dolore mas na aliqua. Sed
                pulvinar proin gravida hendrerit lectus a. Porta lorem mollis
                aliquam ut porttitor leo. Magna sit amet purus gravida quis
                blandit turpis. Vel eros donec
              </p>
            </div>

            <AnimallLogo />
          </div>

          <div className={styles.terminal_item}>
            <div className={styles.terminal_item_text}>
              <p>
                <span>Proyect Name:</span> Twins Concrete <br />
                <span>Demo Url:</span>{' '}
                <a href="https://tctwinconcrete.com/" target="_blank">
                  https://tctwinconcrete.com/
                </a>
              </p>

              <p className={styles.terminal_item_description}>
                Solor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore e t dolore mas na aliqua. Sed
                pulvinar proin gravida hendrerit lectus a. Porta lorem mollis
                aliquam ut porttitor leo. Magna sit amet purus gravida quis
                blandit turpis. Vel eros donec
              </p>
            </div>

            <AnimallLogo />
          </div>
        </div>
      </div>

      <div className={styles.terminal_buttons}>
        <div onClick={handlePrev} className={styles.terminal_buttons_prev}>
          <img
            src="/icons/prev-icon.svg"
            alt="flecha apuntando a la izquierda"
          />
          <span>prev</span>
        </div>

        <div onClick={handleNext} className={styles.terminal_buttons_next}>
          <span>next</span>
          <img src="/icons/next-icon.svg" alt="flecha apuntando a la derecha" />
        </div>
      </div>
    </div>
  );
}
