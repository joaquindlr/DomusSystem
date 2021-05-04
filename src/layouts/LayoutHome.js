import LoadRoutes from "../configs/LoadRoutes";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
export default function LayoutHome(props) {
  const { routes } = props;

  return (
    <div>
      <Header />
      <LoadRoutes routes={routes} />
      <Footer />
    </div>
  );
}
