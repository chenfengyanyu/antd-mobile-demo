import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import styles from './index.css';

function IndexPage() {
  const mytest = () => {
    console.log(1);
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li onClick={mytest}>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><Link to="/users">Getting Started</Link></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
