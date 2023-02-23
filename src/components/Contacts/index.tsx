import Table1 from "../table";

function Contacts({changeThem}) {
  return (
    <div className="col-lg-9">
      <Table1 changeThem={changeThem} />
    </div>
  );
}
export default Contacts;
