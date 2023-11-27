import "../../assets/sass/project.scss";
import ProjectContainer from "../../components/projects/project-container";
import GuatapayPhones from "../../components/general/phones/guatapay/guatapay_phones";
import AdamoPhones from "../../components/general/phones/adamo/adamo_phones";
import LimboScanPhones from "../../components/general/phones/limboscan/limboscan_phones";
import Wave from "../../assets/images/bluewave.svg";
import GreenLine from "../../assets/images/greenline.svg";

function ProjectsScreen() {
  return (
    <div className="project-section" id="projects">
      <h2 className="title">Projects in which I develop the app.</h2>
      <ProjectContainer
        title="Guatapay"
        subtitle="Crypto wallet app"
        backgroundColor="#7429C6"
      >
        <GuatapayPhones index={1} />
        <GuatapayPhones index={2} />
        <GuatapayPhones index={3} />
        <GuatapayPhones index={5} />
      </ProjectContainer>
      <ProjectContainer
        title="Adamo ID"
        flutterWeb
        subtitle="Electronic signatures and verification system"
        backgroundColor="#2CBFEE"
      >
        <AdamoPhones index={1} />
        <AdamoPhones index={2} />
        <AdamoPhones index={3} />
        <AdamoPhones index={5} />
      </ProjectContainer>
      <ProjectContainer
        title="LimboScan"
        subtitle="Fast QR scanner"
        backgroundColor="#FCD680"
        blackMode
      >
        <LimboScanPhones index={1} />
        <LimboScanPhones index={2} />
        <LimboScanPhones index={3} />
        <LimboScanPhones index={5} />
      </ProjectContainer>

      <img src={GreenLine} className="line" />
      <img src={Wave} className="wave" />
    </div>
  );
}

export default ProjectsScreen;
