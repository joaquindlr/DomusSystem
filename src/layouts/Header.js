import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#2D4F81" }}
      className=" d-flex justify-content-between"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3 className="text-light py-3 ms-4">Inmobiliaria Domus</h3>
      </Link>
      <div className="mt-3">
        <Link className="text-decoration-none text-light me-4 fs-4" to="#">
          Quienes somos
        </Link>
        <Link className="text-decoration-none text-light me-4 fs-4" to="#">
          Contactenos
        </Link>
        <Link
          to="/login"
          style={{ color: "#2D4F81", fontWeight: "bold" }}
          className="btn btn-light fs-5 me-4 ms-4 btn-sm"
        >
          Ingresar
        </Link>
        <Link
          to="/registro"
          style={{ color: "#2D4F81", fontWeight: "bold" }}
          className="btn btn-light fs-5 me-4 btn-sm"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
};
export default Header;
