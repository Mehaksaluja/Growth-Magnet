import "./Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <div className="title" id="title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};
export default Title;
