import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Textfield from "./components/Textfield";
import FormInput from "./components/FormInput";
import { catOptions, hargaOptions, statusOptions } from "./constants"
import Hero from "./components/Hero";
// import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
// import SearchCar from "./pages/SearchCar";
import Select from "./components/Select";
import WhyUs from "./components/WhyUS";
// import {BrowserRouter as Router, Switch, route} from 'react-router-dom';
import Testimonial from "./components/Testimonial";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import DetailCar from "./pages/DetailCar";



//props

const App = () => {
  return (
    <div>
      <Navbar />  
      <Hero />
      {/* <Footer /> */}
      <Hero2 />
      <WhyUs />
      <Testimonial />
      <Banner />
      <FAQ />
      {/* <DetailCar /> */}
      {/* <FormInput />
      <Select />
      <Card /> */}
      
      <Textfield labelName={"Kategori"} items={catOptions} />
      <Textfield labelName={"Harga"} items={hargaOptions} />
      <Textfield labelName={"Status"} items={statusOptions} /> */
    
    </div>
  );
};

export default App 