import Medium from "../../assets/images/medium.png";

function BlogContainer({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <div className="blog">
      <a href={link}>
        <img src={image} />
        <h3>{title}</h3>
        <p className="subtitle">{description}</p>

        <p className="medium">
          <span> Read in</span> <img src={Medium} />{" "}
        </p>
      </a>
    </div>
  );
}

export default BlogContainer;
