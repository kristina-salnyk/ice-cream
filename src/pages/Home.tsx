import React, { useEffect } from 'react';
import clsx from 'clsx';
import { ParallaxLayout } from '../components/ParallaxLayout';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import styles from './Home.module.scss';
import createFirefly from '../utils/createFirefly';

function Home() {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    const offsetTop = ref.current.offsetTop;
    const offsetLeft = ref.current.offsetLeft;

    const timers: NodeJS.Timeout[] = [];

    for (let i = 0; i < 100; i++) {
      const firefly = createFirefly(width, height, offsetTop, offsetLeft);
      ref.current.appendChild(firefly);

      const id = setTimeout(() => {
        firefly.style.left = Math.random() * width + offsetLeft + 'px';
        firefly.style.top = Math.random() * height + offsetTop + 'px';
      }, 100);

      timers.push(id);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <ParallaxLayout>
      <Header />
      <main>
        <section className={clsx(styles.section, styles.hero)}>
          <div className={styles.content}>
            <Container>
              <div className={clsx(styles.sectionContent, styles.heading)}>
                <h1 className={styles.title}>Forbidden Forest</h1>
                <p className={styles.subTitle}>Explore the Uncharted with Us</p>
              </div>
            </Container>
          </div>
          <div className={styles.layers}>
            <div className={styles.layerBase} />
            <div className={styles.layerMiddle} />
            <div className={styles.layerFront} />
          </div>
        </section>
        <div ref={ref}>
          <section className={styles.section}>
            <Container>
              <div className={clsx(styles.sectionContent, styles.about)}>
                <h2 className={styles.sectionTitle}>About Us</h2>
                <p className={styles.sectionText}>
                  Welcome to Forbidden Forest, where we specialize in exploring
                  the uncharted. Our team of adventurers is dedicated to
                  uncovering the mysteries hidden within the depths of the
                  forest. With years of experience and a passion for discovery,
                  we are committed to bringing you the most thrilling
                  adventures. Whether you are a seasoned explorer or a novice,
                  we have something for everyone. Join us today and embark on
                  the journey of a lifetime.
                </p>
              </div>
            </Container>
            <div className={styles.layers}>
              <div className={styles.layerDungeon} />
            </div>
          </section>
        </div>
      </main>
    </ParallaxLayout>
  );
}

export default Home;
