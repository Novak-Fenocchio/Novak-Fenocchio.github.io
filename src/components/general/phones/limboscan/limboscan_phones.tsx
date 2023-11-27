import g1 from "../../../../assets/phones/ls1.png";
import g2 from "../../../../assets/phones/ls2.png";
import g3 from "../../../../assets/phones/ls3.png";
import g5 from "../../../../assets/phones/ls4.png";

function LimboScanPhones({ index }: { index: number }) {
  const getPhone = () => {
    switch (index) {
      case 1:
        return g1;
      case 2:
        return g2;
      case 3:
        return g3;
      case 4:
        return g5;
      default:
        return g1;
    }
  };

  return (
    <div className="phone">
      <img src={getPhone()} />
    </div>
  );
}

export default LimboScanPhones;
