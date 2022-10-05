import { render, screen, waitFor } from '@testing-library/react';
import { mockUrlParams } from '../../../../reuseable-logic/url-helpers/tests/mock-url-params.spec';
import LoadSalesOrderPage from '../load-sales-order-page';

describe('LoadSalePage', () => {
  it('should render successfully', async () => {
    const salesOrderId = 'qwerty';
    mockUrlParams({salesOrderId: salesOrderId});
    render(<LoadSalesOrderPage />);
    await waitFor(() => expect(screen.getByText((textValue) => textValue.includes(salesOrderId))).toBeTruthy());
  });
});
