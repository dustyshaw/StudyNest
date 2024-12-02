import SecondaryBtn from "./SecondaryBtn";
import { useNavigate } from "react-router";

const CancelButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <SecondaryBtn onClick={handleGoBack}>Cancel</SecondaryBtn>;
};

export default CancelButton;
