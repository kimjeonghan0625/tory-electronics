import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Link to="single-light" className="pr-4">
        Single Light
      </Link>
      <Link to="duo-light">Duo Light</Link>
    </>
  );
};

export default Products;
