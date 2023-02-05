import "./primary-title.styles.scss";

const PrimaryTitle = ({ title }) => {
  return (
    <div className="primary-title-container">
      <div className="primary-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PrimaryTitle;
