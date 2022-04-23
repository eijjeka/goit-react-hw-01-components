import s from './TransactionHistory.module.css';

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
        {items.map(item => (
          <tr className={s.transaction__row} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
