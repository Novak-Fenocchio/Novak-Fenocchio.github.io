import React from "react";
import GuatapayPhones from "../../general/phones/guatapay/guatapay_phones";
import AdamoPhones from "../../general/phones/adamo/adamo_phones";
import LimboScanPhones from "../../general/phones/limboscan/limboscan_phones";

function SliderPhones() {
  return (
    <div className="slider-phones">
      <GuatapayPhones index={1} />
      <div className="middle">
        <AdamoPhones index={5} />
      </div>
      <div className="right">
        <LimboScanPhones index={2} />
      </div>
      <GuatapayPhones index={3} />
      <div className="middle">
        <GuatapayPhones index={2} />
      </div>{" "}
      <div className="right">
        <LimboScanPhones index={4} />
      </div>{" "}
      <GuatapayPhones index={1} />
      <div className="middle">
        <AdamoPhones index={2} />
      </div>{" "}
      <div className="right">
        <LimboScanPhones index={3} />
      </div>{" "}
      <GuatapayPhones index={3} />
      <div className="middle">
        <AdamoPhones index={2} />
      </div>{" "}
      <div className="right">
        <AdamoPhones index={2} />
      </div>{" "}
    </div>
  );
}

export default SliderPhones;
