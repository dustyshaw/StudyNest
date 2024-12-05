import { useNavigate } from "react-router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="mb-8 hover:underline text-navy-550 hover:text-navy-400 font-semibold flex flex-row align-middle"
      role="button"
    >
      <ChevronLeftIcon className="w-5 me-2" />
      Back
    </div>
  );
};

export default BackButton;
