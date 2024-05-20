import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/solid";

const PostItem = ({ post }) => {
  const { id, title, date, image } = post;

  return (
    <section className="post">
      <Link to={`/post-details/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <Link to={`/post-details/${id}`}>
        <p className="title">{title}</p>
      </Link>
      <p className="date">
        {" "}
        <ClockIcon className="clockIcon" /> <span>{date}</span>
      </p>
      <p></p>
      <hr />
    </section>
  );
};

export default PostItem;
