import Show from "../show/show";

function Table1({ changeThem }) {
  return (
    <div className={changeThem ? "day" : "night"}>
      <table id="myTable" className="table text-justify ">
        <thead className={changeThem ? "table1" : "table2"}>
          <tr>
            <th className="">Name</th>
            <th className="">Family</th>

            <th className="">Phone</th>
            <th className="">Relation</th>

            <th className="">E-mail</th>

            <th className="col-1"></th>
            <th className="col-1"></th>
          </tr>
        </thead>
        <tbody id="tableBody">
          <Show />
        </tbody>
      </table>
    </div>
  );
}
export default Table1;
