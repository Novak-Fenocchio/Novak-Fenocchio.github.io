import g1 from "../../../../assets/phones/ad1.png";
import g2 from "../../../../assets/phones/ad2.png";
import g3 from "../../../../assets/phones/ad3.png";
import g5 from "../../../../assets/phones/ad5.png";

function AdamoPhones({ index }: { index: number }) {
  const getPhone = () => {
    switch (index) {
      case 1:
        return g1;
      case 2:
        return g2;
      case 3:
        return g3;
      case 5:
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

export default AdamoPhones;
