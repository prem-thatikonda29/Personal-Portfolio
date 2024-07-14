import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import styles from './CanvasLoader.module.css';

const HelixLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "80px",
      }}
    >
      <div className={styles.helix_loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.loader_text}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default HelixLoader;
