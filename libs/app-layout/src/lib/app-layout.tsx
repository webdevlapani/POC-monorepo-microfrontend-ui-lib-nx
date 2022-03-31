import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { createElement, useState } from 'react';
import { Link } from 'react-router-dom';
import './app-layout.scss';

const { Header, Sider, Content } = Layout;
export function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layout">
      <Sider
        className="layout_sidebar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <img
            src="https://www.bilflo.com/wp-content/themes/bilflo-w3/img/bilflo-lockup-f1-500px.png"
            alt="bilflo"
          />
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/billing"> Billing</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/reports"> Reports</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
