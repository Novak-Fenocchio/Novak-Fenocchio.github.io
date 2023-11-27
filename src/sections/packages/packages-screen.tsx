import "../../assets/sass/packages.scss";
import PackageContainer from "../../components/packages/package-container";
import RenderIfImage from "../../assets/images/renderif.svg";
import UniversalPicture from "../../assets/images/universalpicture.svg";
import Copy from "../../assets/images/copy.svg";
import Star from "../../assets/images/star.svg";

function PackagesScreen() {
  return (
    <div className="packages-screen" id="packages">
      <h2 className="title">Packages I have developed.</h2>
      <p className="subtitle">
        I've built these Flutter and React packages with pure coding love,
        aiming to simplify life for developers, just like me, who crave
        practical solutions.
      </p>

      <PackageContainer
        title="RenderIf"
        packageName="renderif"
        url="https://pub.dev/packages/renderif"
        description="RenderIf is a Flutter library designed to make your Flutter code cleaner and your development process faster. This library provides an extra boolean parameter, condition, for several common Flutter widgets."
        image={RenderIfImage}
      />
      <PackageContainer
        title="Universal picture"
        url="https://pub.dev/packages/universal_picture"
        packageName="universal_picture"
        description="UniversalPicture is a versatile Flutter library for rendering images regardless of their format or source. This widget simplifies the process of loading and displaying images in Flutter applications, supporting a variety of sources such as local files, network URLs, in-memory data, and SVGs."
        image={UniversalPicture}
      />
      <PackageContainer
        title="Simple copy"
        react
        url="https://www.npmjs.com/package/@martin-fenocchio/simple_copy"
        packageName="@martin-fenocchio/simple_copy"
        description="This is a small npm library for copying text to the clipboard. It's very simple to use and works in web applications."
        image={Copy}
      />

      <img src={Star} className="star1" />
      <img src={Star} className="star2" />
      <img src={Star} className="star3" />
      <img src={Star} className="star4" />
      <img src={Star} className="star5" />
      <img src={Star} className="star6" />
      <img src={Star} className="star7" />
      <img src={Star} className="star8" />
      <img src={Star} className="star9" />
      <img src={Star} className="star10" />
      <img src={Star} className="star11" />
      <img src={Star} className="star12" />
      <img src={Star} className="star13" />
      <img src={Star} className="star14" />
    </div>
  );
}

export default PackagesScreen;
