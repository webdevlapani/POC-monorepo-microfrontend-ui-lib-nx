import { Typography } from 'antd';
import { PageHeader } from '@my-fav-org/ui';

const { Title } = Typography;
export interface ReportsProps {
  name: string;
}

export function Reports({ name }: ReportsProps) {
  return (
    <>
      <PageHeader title="Reports" />
      <Title level={2}> Hello {name}s Reports</Title>
    </>
  );
}

export default Reports;
