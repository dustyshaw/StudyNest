import BounceLoader from "react-spinners/BounceLoader";

const LoadingComponent = () => {
  return (
    <div className="w-100 h-screen flex items-center justify-center">
      <div style={{ maxWidth: "600px" }} className="text-center">
        <BounceLoader
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={1}
          color="#C4ABE6"
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
