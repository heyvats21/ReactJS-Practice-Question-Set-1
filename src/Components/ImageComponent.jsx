export default function ImageComponent({ imageLink, caption }) {
  return (
    <div>
      <h1>Image Component</h1>
      <img src={imageLink} alt={caption} /> {caption}
    </div>
  );
}
