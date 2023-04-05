import React from "react";
import './style.css';


const Banner = () => {
    // 

    
    return(
        <div className=" container section5 mt-5 d-flex flex-column justify-content-center">
      <div id="word-1">Sewa Mobil di JAKARTA Sekarang</div>
      <div id="word-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <button onClick={() => ('/cari-mobil')}
        type="button"
        className="btn btn-success mt-"
      >
        Mulai Sewa Mobil
      </button>
    </div>
    )
}

export default Banner;