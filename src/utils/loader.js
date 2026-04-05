//加载动画：蚯蚓钻地

import React from 'react';

const EarthwormLoader = () => {
  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      // 核心：容器层级禁止溢出
      overflow: 'hidden', 
      backgroundColor: '#663C27',
      backgroundImage: `
        radial-gradient(#5d4037 10%, transparent 11%),
        radial-gradient(#3e2723 10%, transparent 11%)
      `,
      backgroundSize: '30px 30px',
      backgroundPosition: '0 0, 15px 15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // 确保容器占据整个视口
      position: 'fixed',
      top: 0,
      left: 0,
    },
    loaderWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    loadingText: {
      position: 'absolute',
      bottom: '-50px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#d7ccc8',
      fontFamily: '"Microsoft YaHei", sans-serif',
      letterSpacing: '2px',
      whiteSpace: 'nowrap',
    }
  };

  return (
    <div style={styles.container}>
      {/* 注入全局动画以及全局隐藏滚动条的样式 */}
      <style>
        {`
          /* 强制隐藏全局滚动条 */
          html, body {
            margin: 0;
            padding: 0;
            overflow: hidden !important;
            height: 100%;
            width: 100%;
            /* 针对 Firefox */
            scrollbar-width: none; 
            /* 针对 IE/Edge */
            -ms-overflow-style: none; 
          }

          /* 针对 Chrome, Safari 和 Opera */
          html::-webkit-scrollbar, 
          body::-webkit-scrollbar {
            display: none;
          }

          @keyframes creep {
            0%, 100% { transform: translateX(0) scale(1); }
            50% { transform: translateX(15px) scale(1.2, 0.8); }
          }
          
          .worm-segment {
            width: 30px;
            height: 30px;
            background-color: #ff8a80;
            border-radius: 50%;
            margin-right: -8px;
            animation: creep 1.5s ease-in-out infinite;
            box-shadow: inset -3px -3px 5px rgba(0, 0, 0, 0.2);
          }

          .worm-head {
            position: relative;
            background-color: #ff5252;
            z-index: 2;
          }

          .worm-head::before,
          .worm-head::after {
            content: '';
            position: absolute;
            width: 4px;
            height: 4px;
            background: #333;
            border-radius: 50%;
            top: 8px;
          }
          .worm-head::before { left: 8px; }
          .worm-head::after { right: 8px; }
        `}
      </style>

      <div style={styles.loaderWrapper}>
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="worm-segment" 
            style={{ animationDelay: `${(i + 1) * 0.1}s` }} 
          />
        ))}
        
        <div 
          className="worm-segment worm-head" 
          style={{ animationDelay: '0.5s' }} 
        />

        <div style={styles.loadingText}>正在努力钻地中...</div>
      </div>
    </div>
  );
};

export default EarthwormLoader;
