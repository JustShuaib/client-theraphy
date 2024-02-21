import { MdErrorOutline } from "react-icons/md";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col gap-y-2 justify-center w-full items-center">
      <MdErrorOutline color="#EF4444" fontSize="4rem" />
      <p className="text-red-500 text-lg font-medium">
        Error. Something went wrong...
      </p>
    </div>
  );
};

export default ErrorMessage;
