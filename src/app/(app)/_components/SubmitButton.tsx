import type { ReactElement } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type TSubmitButtonProps = {
  loading: boolean;
  text: string;
}

const SubmitButton = ({ loading, text }: TSubmitButtonProps): ReactElement => {

  return (
    <button
      type="submit"
      className="bg-white text-black rounded w-full p-2 grid place-items-center h-10"
      disabled={loading}
    >
      { loading ? <AiOutlineLoading3Quarters className={`animate-spin ${loading ? "block" : "hidden"}`} /> : text }
    </button>
  );
};

export default SubmitButton;