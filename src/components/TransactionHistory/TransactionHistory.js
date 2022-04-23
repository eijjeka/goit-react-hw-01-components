import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th className={s.transaction__head}>Type</th>
          <th className={s.transaction__head}>Amount</th>
          <th className={s.transaction__head}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.transaction__body}>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr
            className={index % 2 === 0 ? s.transaction__row : s.accent}
            key={id}
          >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
