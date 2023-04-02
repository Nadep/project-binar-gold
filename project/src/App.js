import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Textfield from "./components/Textfield";
import FormInput from "./components/FormInput";
import { catOptions, hargaOptions, statusOptions } from "./constants"
import Hero from './components/Hero';


//props

const App = () => {
  return (
    <div>
      <Navbar />
      <Card description="Siapapun tolongin gua dalam membuat project ini" reviewer="Nadia" />
      <Card description="Siapapun tolongin gua dalam membuat project ini" reviewer="Frendi" />
      <Card description="Siapapun tolongin gua dalam membuat project ini" reviewer="Davina" />
      <Textfield labelName={"Nama Mobil"} />
      <Textfield labelName={"Kategori"} items={catOptions} />
      <Textfield labelName={"Harga"} items={hargaOptions} />
      <Textfield labelName={"Status"} items={statusOptions} />
      <FormInput />
      <Hero />
    </div>
  );
};

export default App 