import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => navigate("/products");
  return (
    <>
      <h1>Home</h1>
      <Link to={"/products"}> To Product</Link>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};
export default HomePage;
