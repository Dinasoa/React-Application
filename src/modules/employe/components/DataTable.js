import { DataElement } from "./DataElement";
import TableHead from "./TableHead";
import data from "../../../jsonFile/data.json";

export function DataTable(props) {
  return (
    <table className="table" id="datatablesSimple">
      <thead>
        <TableHead name="Name" position="Position"  office="Office" age="Age"   date="Start date" salary="Salary"></TableHead>
      </thead>
      <tfoot>
        <TableHead name="Name"  position="Position" office="Office" age="Age" date="Start date" salary="Salary" ></TableHead>
      </tfoot>
      <tbody>
        {data.map((elt) => (
          <DataElement item={elt} />
        ))}
      </tbody>
    </table>
  );
}
