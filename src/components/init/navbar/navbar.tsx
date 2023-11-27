function Navbar() {
  return (
    <div className="navbar">
      <span className="name">MF</span>
      <div className="right">
        <a href="#projects">
          {" "}
          <span>Projects</span>
        </a>
        <a href="#blogs">
          {" "}
          <span>Blogs</span>
        </a>
        <a href="#packages">
          {" "}
          <span>Libraries</span>
        </a>
        <a href="#contact">
          {" "}
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
