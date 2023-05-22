export default function Button({
  backgroundColor,
  color,
  borderRadius,
  padding
}) {
  return (
    <div>
      <h1>Button</h1>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          borderRadius: borderRadius,
          padding: padding
        }}
      >
        Start
      </button>
    </div>
  );
}
