import React from 'react';
import styles from './ParallaxLayout.module.scss';

function ParallaxLayout({ children }: React.PropsWithChildren) {
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const value = Math.abs(e.currentTarget.scrollTop);
    document.documentElement.style.setProperty('--scrollTop', `${value}px`);
  };

  return (
    <div className={styles.content} onScroll={onScroll}>
      {children}
    </div>
  );
}

export default ParallaxLayout;
