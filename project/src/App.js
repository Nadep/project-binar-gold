import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Textfield from "./components/Textfield";
import FormInput from "./components/FormInput";
import { catOptions, hargaOptions, statusOptions } from "./constants"
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
// import SearchCar from "./pages/SearchCar";
import Select from "./components/Select";
<<<<<<< HEAD
import WhyUs from "./components/WhyUS";
import {BrowserRouter as Router, Switch, route} from 'react-router-dom';
=======
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
>>>>>>> a5ed45d293412bb817e499fcac04e840cced1ca5


//props

const App = () => {
  return (
    <div>
      <Navbar />  
      <Hero />
      <footer />
      <Hero2 />
      <WhyUs />
<<<<<<< HEAD


=======
      <Testimonial />
>>>>>>> a5ed45d293412bb817e499fcac04e840cced1ca5
      {/* <Hero2 /> */}
      {/* <Card description="Siapapun tolongin gua dalam membuat project ini" reviewer="Nadia" />
      <Card description="Siapapun tolongin gua dalam membuat project ini" reviewer="Frendi" />
      <Card description="Siapapun tolongin gua dalam membuat project ini" reviewer="Davina" /> */}
      {/* <Textfield labelName={"Nama Mobil"} />
      <Textfield labelName={"Kategori"} items={catOptions} />
      <Textfield labelName={"Harga"} items={hargaOptions} />
      <Textfield labelName={"Status"} items={statusOptions} /> */}
    
    </div>
  );
};

export default App 