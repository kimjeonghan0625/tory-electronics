import { useParams } from "react-router-dom";
import SingleLight from "../components/SingleLight";
import DuoLight from "../components/DuoLight";
import { Link } from "react-router-dom";

const Product = () => {
  const params = useParams();
  let product;
  if (params.productName === "single-light") {
    product = <SingleLight />;
  }
  if (params.productName === "duo-light") {
    product = <DuoLight />;
  }
  return (
    <>
      <div>{product}</div>
      <button>
        <Link to=".." relative="path">
          Go Back
        </Link>
      </button>
    </>
  );
};

export default Product;
