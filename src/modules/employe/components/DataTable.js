import { DataItem } from "./DataItem";
import TableHead from "./TableHead";

import data from "../../../assets/data.json";

export function DataTable(props) {
  return (
    <table className="table" id="datatablesSimple">
      <thead>
        <TableHead
          name="Name"
          position="Position"
          office="Office"
          age="Age"
          date="Start date"
          salary="Salary"
        ></TableHead>
      </thead>
      <tfoot>
        <TableHead
          name="Name"
          position="Position"
          office="Office"
          age="Age"
          date="Start date"
          salary="Salary"
        ></TableHead>
      </tfoot>
      <tbody>
        {data.map((dataItem) => (
          <DataItem item={dataItem} />
        ))}
      </tbody>
    </table>
  );
}
