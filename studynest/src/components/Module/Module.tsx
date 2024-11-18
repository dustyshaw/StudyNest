import { useParams } from "react-router";

const Module = () => {
  const { unitId } = useParams();
  console.log(unitId);

  return <div>Module</div>;
};

export default Module;
