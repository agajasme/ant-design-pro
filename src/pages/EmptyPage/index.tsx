import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect, Component} from 'react';
import { Spin } from 'antd';
import styles from './index.less';

class Clock extends Component {
  timer: number | undefined = undefined;

  requestRef: number | undefined = undefined;

  componentDidMount() {
    this.loopData();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    if (this.requestRef) {
      cancelAnimationFrame(this.requestRef);
    }
  }

  loopData = () => {
    this.requestRef = requestAnimationFrame(() => {
      this.timer = window.setTimeout(() => {
        this.setState(
          {
            //date:new Date()
          },
          () => {
            this.loopData();
          },
        );
      }, 1000);
    });
  };

  render() {
    return (
      <div>
        <h2>现在是 {new Date().toLocaleTimeString()}</h2>
        <p>创建图片链接:
          <a href="https://www.runoob.com">
            访问菜鸟教程
          </a>
        </p>
      </div>
    );
  }
}

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper content="Hello World！" className={styles.main}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
        <Clock />
      </div>
    </PageHeaderWrapper>
  );
};
