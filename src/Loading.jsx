export default function Loading({ msg }) {
  return <div>Loading{msg ? ` ${msg}....` : "...."}</div>;
}
