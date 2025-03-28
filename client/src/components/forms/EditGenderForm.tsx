import { Link } from "react-router-dom";

const EditGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div></div>
        <div className="d-flex justify-content-end">
          <Link to={"/"} className="btn btn-secondary me-1">
            BACK
          </Link>
          <button type="submit" className="btn btn-danger">
            SAVE
          </button>
        </div>
      </div>
    </>
  );
};

export default EditGenderForm;
