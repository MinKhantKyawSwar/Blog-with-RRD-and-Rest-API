import React from "react";
import { ClockIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useSubmit } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { description, image, title, date } = post;
  const submit = useSubmit();

  const postDeleteHandler = () => {
    const confirmStatus = window.confirm(
      "Do you really want to delete this post?"
    );

    if (confirmStatus) {
      submit(null, {
        method: "DELETE",
      });
    }
  };

  return (
    <section className="details">
      <div className="detail-header">
        <p className="detail-title">{title.toUpperCase()}</p>
        <p className="date">
          <ClockIcon className="clockIcon" />
          {date}
        </p>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrowIcon" />
        </Link>
      </div>
      <img src={image} alt={title} />
      <p className="description">{description}</p>{" "}
      <div className="detail-footer">
        <Link to={`edit-post`}>
          <p className="btn sm">Edit</p>
        </Link>
        <p className="btn sm" onClick={postDeleteHandler}>
          Delete
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
