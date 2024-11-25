// import React from "react";
// import TextInput from "../../Inputs/TextInput";
// import { PlusCircleIcon } from "@heroicons/react/16/solid";
// import Button from "../../genericComponents/Button";

// interface AddUnitsToCourseProps {
//   handleForm: (e: React.ChangeEvent<HTMLInputElement>) => void; // send form data up to parent
// }

// const AddUnitsToCourse: React.FC<AddUnitsToCourseProps> = ({ handleForm }) => {
// //   const [unitsToAdd, setUnitsToAdd] = useState<AddUnitRequest[]>([]);

// //   const handleAddUnitToList = () => {
// //     setUnitsToAdd()
// //   }

//   return (
//     <>
//       {unitsToAdd.map((unitRequest, key) => (
//         <li key={key}>{unitRequest.title}</li>
//       ))}
      
//       <TextInput
//         label="Unit Title"
//         placeholder="Enter Unit Title"
//         error="Unit Title is Required"
//         required={true}
//         id="title"
//         onChange={handleForm}
//         defaultValue={""}
//         className={"shadow-inner text-xl px-3 py-2 w-full bg-gray-100"}
//         helperText={""}
//       />
//       <Button onClick={handleAddUnitToList}>Add this unit</Button>
//       <div className="flex flex-col items-center group relative">
//         <small className="text-xs mb-0 p-0 m-0 opacity-0 translate-y-6 scale-50 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
//           Add unit
//         </small>
//         <div className="flex flex-row align-middle items-center w-full m-0">
//           <div className="w-1/2 h-[1px] ms-8 bg-gray-400" />
//           <PlusCircleIcon className="size-10 text-gray-400 " />
//           <div className="w-1/2 h-[1px] me-8 bg-gray-400" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddUnitsToCourse;
