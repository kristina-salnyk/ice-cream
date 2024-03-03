import React from 'react';
import clsx from 'clsx';
import { ParallaxLayout } from '../components/ParallaxLayout';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import styles from './Home.module.scss';

function Home() {
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
        <section className={styles.section}>
          <Container>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>About US</h2>
              <p className={styles.sectionText}>
                Welcome to Forbidden Forest, where we specialize in exploring
                the uncharted. Our team of adventurers is dedicated to
                uncovering the mysteries hidden within the depths of the forest.
                With years of experience and a passion for discovery, we are
                committed to bringing you the most thrilling adventures.
              </p>
            </div>
          </Container>
          <div className={styles.layers}>
            <div className={styles.layerDungeon} />
          </div>
        </section>
      </main>
    </ParallaxLayout>
  );
}

export default Home;
