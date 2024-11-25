import React, { FC } from "react";

interface NextAndBackBtnProps {
  scrollToInput?: (inputRef: React.RefObject<HTMLDivElement | null>) => void;
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
  formData: string | undefined;
}

const NextAndBackBtn: FC<NextAndBackBtnProps> = ({
  scrollToInput,
  targetRef,
  formData,
}) => {
  const handleClick = () => {
    if (formData && formData?.length > 0 && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-row justify-between">
      <p
        className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
        onClick={() => {
          // Using optional chaining to call scrollToInput if it's defined
          scrollToInput?.(targetRef);
        }}
      >
        Back
      </p>
      <p
        className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
        onClick={handleClick}
      >
        Next
      </p>
    </div>
  );
};

export default NextAndBackBtn;
