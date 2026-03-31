// src/components/SoilLoader.js

import React from 'react';
import './styles/Loader.css'; // 引入对应的样式文件


const Loader = () => {
  return (
    <div className="soil-loader-container">
      <div className="soil-loader">
        
        {/* 土壤背景 (洞) */}
        <div className="soil-hole">
          {/* 泥土颗粒装饰 */}
          <div className="dirt-particle p1"></div>
          <div className="dirt-particle p2"></div>
          <div className="dirt-particle p3"></div>
        </div>


        {/* 鼹鼠角色 */}
        <div className="mole">
          <div className="mole-body">
            <div className="mole-nose"></div>
            <div className="mole-eye left"></div>
            <div className="mole-eye right"></div>
            <div className="mole-paw left"></div>
            <div className="mole-paw right"></div>
          </div>
        </div>

       </div> 
      <p className="loading-text">Digging for data......</p>
    
    </div>
  );
};

export default Loader;




        
        

        
      