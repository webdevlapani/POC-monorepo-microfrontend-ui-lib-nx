import styles from './billing.module.scss';

/* eslint-disable-next-line */
export interface BillingProps {
  name: string;
}

export function Billing(props: BillingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Billing! {props.name}</h1>
    </div>
  );
}

export default Billing;
