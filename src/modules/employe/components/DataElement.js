export function DataElement(props) {
  const { name, position, office, age, date, salary } = props.item;

  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{office}</td>
      <td>{age}</td>
      <td>{date}</td>
      <td>{salary}</td>
    </tr>
  );
}
