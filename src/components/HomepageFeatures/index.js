import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单明了的接口',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        接口均作了命令行封装，方便查阅、调用。
        <br />
        <small style={{color: 'gray'}}>不过为什么不直接从源码部署文档呢…</small>
      </>
    ),
  },
  {
    title: '使用 Docusaurus 构建',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        成熟的百科方案，使用 GitHub Actions 自动部署。
        <br />
        <small style={{color: 'gray'}}>MDX 真的是太棒了，WTMCB！！</small>
      </>
    ),
  },
  {
    title: '自豪的采用 Rust',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        使用 Rust 进行开发，执行效率一个顶俩。
        <br />
        <small style={{color: 'gray'}}>虽然写的时候很痛苦…</small>
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
