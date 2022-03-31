import { Breadcrumb, Button } from 'antd';
import './PageHeader.scss';

/* eslint-disable-next-line */
export interface UiProps {
  title: string;
}

export function PageHeader({ title }: UiProps) {
  return (
    <div
      style={{
        borderRadius: '6px',
        backgroundColor: '#ffffff',
        margin: '15px 0 30px 0',
        boxShadow: '0px 2px 4px 0px rgb(35 47 51 / 20%)',
        padding: '0 10px 20px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h2 style={{ fontWeight: '600' }}>{title}</h2>
        <Breadcrumb style={{ margin: '16px 0', outline: 'none', padding: 0 }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Button type="primary">Create</Button>
    </div>
  );
}

export default PageHeader;
