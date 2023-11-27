import Flutter from "../../assets/images/flutter.png";
import npm from "../../assets/images/npm.png";

function PackageContainer({
  title,
  description,
  image,
  packageName,
  url,
  react,
}: {
  title: string;
  packageName: string;
  description: string;
  image: string;
  url: string;
  react?: boolean;
}) {
  return (
    <div className="package">
      <div className="texts">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{description}</p>

        <p className="subtitle codeinstall">You can install it with:</p>

        <div className="code">
          <code>
            {react ? "npm install" : "flutter pub add"} {packageName}
          </code>
        </div>

        {react ? (
          <button
            className="reactbutton pointer"
            onClick={() => window.open(url)}
          >
            {" "}
            <img src={npm} /> See in npmjs
          </button>
        ) : (
          <button
            className="flutterbutton pointer"
            onClick={() => window.open(url)}
          >
            {" "}
            <img src={Flutter} /> See in pub.dev
          </button>
        )}
      </div>
      <img src={image} />
    </div>
  );
}

export default PackageContainer;
