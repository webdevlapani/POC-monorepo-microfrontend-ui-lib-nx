import { AppLayout } from '@my-fav-org/app-layout';
import { Billing } from '@my-fav-org/billing';
import { Reports } from '@my-fav-org/reports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlifloRoutesProps {}

export function BlifloRoutes(props: BlifloRoutesProps) {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Billing name="iLapani" />} />
          <Route path="/billing" element={<Billing name="iLapani" />} />
          <Route path="/reports" element={<Reports name="iLapani" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default BlifloRoutes;
