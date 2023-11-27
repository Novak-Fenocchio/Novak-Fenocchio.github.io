import "../../assets/sass/blog.scss";
import BlogContainer from "../../components/blogs/blog-container";
import Blog1 from "../../assets/images/blog1.svg";
import Blog2 from "../../assets/images/blog2.svg";
import Blog3 from "../../assets/images/blog3.svg";
import GreenLine from "../../assets/images/greenline.svg";
import Wave from "../../assets/images/bluewave.svg";

function BlogsScreen() {
  return (
    <div className="blogs-screen" id="blogs">
      <h2 className="title">Blogs</h2>
      <p className="subtitle">
        I have a genuine passion for writing about programming, with a
        particular focus on Flutter and JavaScript. Not only does this practice
        deepen my own understanding, but it also allows me to share useful and
        interesting insights with fellow developers.
      </p>

      <div className="blogs">
        <BlogContainer
          title="How to update the number 
version automatically in 
a flutter app
"
          link="https://medium.com/@martin_feno/how-to-update-the-number-version-automatically-in-a-flutter-app-265ed5e3eee4"
          image={Blog1}
          description="In this blog I share a simple script coded by me to increase the version number on each commit, saving me time."
        />
        <BlogContainer
          title="Boost Your Flutter App’s Performance with This Simple Script"
          link="https://medium.com/@martin_feno/boost-your-flutter-apps-performance-with-this-simple-script-55728bff4354"
          image={Blog2}
          description="A javascript script that I made to detect the unused libraries and assets to save storage and improve the performance of an app"
        />
        <BlogContainer
          title="7 Shortcuts to improve your productivity in flutter development"
          link="https://medium.com/@martin_feno/7-shortcuts-for-flutter-development-e1d4dba60708"
          image={Blog3}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
        />

        <img src={GreenLine} className="GreenLine" />
        <img src={Wave} className="Wave" />
      </div>
    </div>
  );
}

export default BlogsScreen;
