import styles from './reports.module.scss';

export interface ReportsProps {
  name: string;
}

export function Reports(props: ReportsProps) {
  return (
    <div className={styles['container']}>
      <h1>Reports From {props.name} !</h1>
    </div>
  );
}

export default Reports;
