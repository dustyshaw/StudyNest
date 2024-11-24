// import React, { FC } from "react";

// interface NextAndBackBtnProps {
//     scrollToInput?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

//   targetRef: React.RefObject<HTMLDivElement | null>;
// }

// const NextAndBackBtn: FC<NextAndBackBtnProps> = ({
//   scrollToInput,
//   targetRef,
// }) => {
//   return (
//     <div className="w-full flex flex-row justify-between">
//       <p
//   className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
//   onClick={() => {
//     // Using optional chaining to call scrollToInput if it's defined
//     scrollToInput?.(targetRef);
//   }}
// >
//   Back
// </p>
//       <p
//         className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
//         onClick={() => {
//           if (formData.description && formData.description?.length > 0) {
//             scrollToInput?(targetRef);
//           }
//         }}
//       >
//         Next
//       </p>
//     </div>
//   );
// };

// export default NextAndBackBtn;
