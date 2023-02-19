import Button1 from "../button";
import Input from "../input";

function AddToCart() {
  return (
    <div className="col-lg-3 inp">
      <Input type="search" placeholder="search" className="form-control mt-2" />
      <h5 className="mt-2">Add New Contact</h5>
      <Input
        type="text"
        placeholder="Name"
        className="form-control mb-3 mt-3"
      />
      <Input
        type="text"
        placeholder="Family"
        className="form-control mb-3 mt-3"
      />
      <Input
        type="text"
        placeholder="Number"
        className="form-control mb-3 mt-3"
      />
      <Input
        type="text"
        placeholder="Relation ship"
        className="form-control mb-3 mt-3"
      />
      <Input
        type="email"
        placeholder="E-mail"
        className="form-control mb-3 mt-3"
      />
      <Button1 title="Add" className="btn btn-info w-100 btn1" />
    </div>
  );
}
export default AddToCart;
