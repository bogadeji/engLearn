import React from 'react';
import styles from './clickBtns.module.css'


function ClickRight() {
  return (
    <button className={[styles.clickbtn, styles.border].join(' ')}>
      <p>
        &#x276F;
      </p>
    </button>
  )
}

function ClickLeft() {
  return (
    <button className={[styles.clickbtn, styles.border].join(' ')}>
      <p>
        &#x276E;
      </p>
    </button>
  )
}

function MoreBtn() {
  return (
    <button className={[styles.clickbtn, styles.noborder, styles.morebtn].join(' ')}>
      <p>
        &#8943;
      </p>
    </button>
  )
}

export {
  ClickRight,
  ClickLeft,
  MoreBtn
}