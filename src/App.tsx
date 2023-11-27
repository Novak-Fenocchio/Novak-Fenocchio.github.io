import "./assets/sass/app.scss";
import AboutMe from "./sections/aboutme/about-me";
import BlogsScreen from "./sections/blogs/blogs-screen";
import ContactScreen from "./sections/contact/contact-screen";
import InitScreen from "./sections/init/init-screen";
import PackagesScreen from "./sections/packages/packages-screen";
import ProjectsScreen from "./sections/projects/projects-screen";

function App() {
  return (
    <>
      <InitScreen />
      <AboutMe />
      <ProjectsScreen />
      <PackagesScreen />
      <BlogsScreen />
      <ContactScreen />
    </>
  );
}

export default App;
