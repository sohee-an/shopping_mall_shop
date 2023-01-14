import Announcement from "../components/home/Announcement";
import Navbar from "../components/home/Navbar";
import Slider from "../components/home/Slider";
import Categories from "../components/category/Categories";
import Products from "../components/product/Products";
import Newsletter from "../components/product/Newsletter";
import Footer from "../components/home/Footer";

function HomePage() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default HomePage;
