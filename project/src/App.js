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
import WhyUs from "./components/WhyUS";
import {BrowserRouter as Router, Switch, route} from 'react-router-dom';


//props

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <br></br><br></br> */}
      <Hero />
      <br></br><br></br>
      <br></br><br></br>
      <footer />
      <Hero2 />
      <WhyUs />


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