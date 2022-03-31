import { Typography } from 'antd';
import { PageHeader } from '@my-fav-org/ui';

const { Title } = Typography;

export interface BillingProps {
  name: string;
}

export function Billing({ name }: BillingProps) {
  return (
    <>
      <PageHeader title="Billing" />
      <Title level={2}> Hello {name}'s Billing</Title>
    </>
  );
}

export default Billing;
