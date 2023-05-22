export default function Stationary({ items, header }) {
  return (
    <div>
      <h1>{header}</h1>
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}
