// import React, { FC } from "react";
// import TextInput from "../../Inputs/TextInput";

// interface reahh {

//         titleRef: useRef<HTMLDivElement | null>(null),
//         descriptionRef: useRef<HTMLDivElement | null>(null),
    
// }

// interface InputWithHrefsProps {

// }

// const InputWithHrefs: FC<InputWithHrefsProps> = () => {
//   const scrollToInput = (inputRef: React.RefObject<HTMLDivElement | null>) => {
//     if (inputRef.current) {
//       inputRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <div
//       ref={targetRefs.titleRef}
//       className="h-screen flex justify-center items-center"
//     >
//       <div className="w-1/2">
//         <TextInput
//           label="* Course Title"
//           placeholder="Enter Course Title"
//           error="Course Title is Required"
//           required={true}
//           id="title"
//           onChange={handleForm}
//           defaultValue={""}
//           className={"shadow-inner text-xl px-3 py-2 w-full"}
//           helperText={"Anything you want to learn! "}
//         />
//         <p
//           onClick={() => {
//             scrollToInput(targetRefs.descriptionRef);
//           }}
//         >
//           Next
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InputWithHrefs;
