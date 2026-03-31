// 例如在 src/pages/Home.jsx 中
import React, { useState, useEffect } from 'react';

import Loader from '../Loader'; 

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // 模拟数据加载过程
  useEffect(() => {
    const fetchData = async () => {
      // 模拟网络请求延迟
      await new Promise(resolve => setTimeout(resolve, 10000));
      setData({ message: "数据加载完成！" });
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* 如果 loading 为 true，就显示土壤加载动画 */}
      {loading ? (
        <Loader />
      ) : (
        <div>
          <p>测试</p>
        </div>
      )}
    </div>
  );
}

export default Home;