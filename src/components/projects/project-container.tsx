import React from "react";
import Appstore from "../../assets/images/appstore.svg";
import Playstore from "../../assets/images/playstore.svg";

function ProjectContainer({
  children,
  title,
  subtitle,
  backgroundColor,
  blackMode,
  flutterWeb,
}: {
  backgroundColor: string;
  title: string;
  flutterWeb?: boolean;
  blackMode?: boolean;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={"project-container project-container-" + blackMode}
      style={{ backgroundColor }}
    >
      <div className="header">
        <h2 className="title">
          {title} <span className="subtitle">- {subtitle}</span>
        </h2>

        {!flutterWeb && (
          <div className="stores">
            <img src={Appstore} className="pointer" />
            <img src={Playstore} className="pointer" />
          </div>
        )}
      </div>

      <div className="phones">{children}</div>

      {flutterWeb && <div className="flutterweb">Made with Flutter Web!</div>}
    </div>
  );
}

export default ProjectContainer;
