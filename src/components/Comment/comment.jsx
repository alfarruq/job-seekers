import Quote from "../../assets/quote-up.png";
import "./comment.css"

const Comment = (props) => {
  return (
    <div className="CommentBox">
      <img src={Quote} alt="quote" />
      <h3>{props?.comment?.title}</h3>
      <hr />
      <div className="comment__content">
        <img src={props?.comment?.profile} alt="Profile Image" />
        <div className="comment__content--wrapper">
          <p><b>{props?.comment?.name}</b></p>
          <p>Director of Content Experience</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;