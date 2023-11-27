import "../../assets/sass/init.scss";
import Navbar from "../../components/init/navbar/navbar";
import SliderPhones from "../../components/init/phones/slider_phones";
import Wave from "../../assets/images/wavetop.svg";

function InitScreen() {
  return (
    <div className="init">
      <Navbar />

      <div className="me">
        <h1>
          Martín
          <br />
          Fenocchio
        </h1>
        <h3>Flutter & React JS developer</h3>
        <button>
          <a href="#me">Go!</a>
        </button>
      </div>

      <SliderPhones />

      <img className="wave" src={Wave} />
    </div>
  );
}

export default InitScreen;
