import PropTypes from 'prop-types';
import { Table, TableThead, TableTh, TableTd } from './Transaction.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableThead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </TableThead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableTd>{item.type}</TableTd>
            <TableTd>{item.amount}</TableTd>
            <TableTd>{item.currency}</TableTd>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ),
};
