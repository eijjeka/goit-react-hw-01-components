import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  const renderTitle = title ? <h2 className={s.title}>Upload stats</h2> : '';
  return (
    <section className={s.statistics}>
      {renderTitle}
      <ul className={s.stat__list}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: randColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Random color
function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
}

// [
//   { id: 'id-1', label: '.docx', percentage: 22 },
//   { id: 'id-2', label: '.pdf', percentage: 4 },
//   { id: 'id-3', label: '.mp3', percentage: 17 },
//   { id: 'id-4', label: '.psd', percentage: 47 },
//   { id: 'id-5', label: '.pdf', percentage: 10 },
// ];
