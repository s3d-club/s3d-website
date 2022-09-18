import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>

          <div style={{padding: 10}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/tutorial/00">
              Tutorial
            </Link>
          </div>

          <div style={{padding: 10}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/open-source/overview">
              Open Source Tools
            </Link>
          </div>

          <div style={{padding: 10}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/views/overview">
              Opinionated Views
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="S3D Website">
      <main>
        <HomepageFeatures />
        <div style={{padding: 20}}>
          <p>
            We are still in the process of building this site so please let us know if you
            find things confusing or notice areas where we have issues with the way the
            site is coded.
          </p>
        </div>
      </main>
    </Layout>
  );
}
