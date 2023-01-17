import Slider from "../components/home/Slider";
import Categories from "../components/category/Categories";
import Products from "../components/product/Products";
import Newsletter from "../components/product/Newsletter";

function HomePage() {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
}

export default HomePage;
