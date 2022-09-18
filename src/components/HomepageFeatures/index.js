import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tutorial',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We have a <a href="/docs/category/open-source-tools">tutorial</a> that
        helps people create their own AWS based development site with a
        website, API Gateway, Webservies, and development tools.
      </>
    ),
  },
  {
    title: 'Open Source Tools',
    to: '/docs/category/opinionated-views',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The S3D club builds <a href="/docs/category/open-source-tools">open
        source tools</a> that can help you and your teams improve your
        development experience.
      </>
    ),
  },
  {
    title: 'Opinionatied Views',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We are a club that LOVEs to discuss software best practices. We
        have strong <a href="/docs/category/opinionated-views">opinionatied
        views</a> about the right way to work with tools like GIT, Go,
        Bash, AWS, PostgreSQL, etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
