import { useState } from "react";
import { useNavigate } from "react-router";
const useSearchPoke = () => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  console.log(input);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event?.target?.value);
  };

  const onSubmit = () => {
    navigate(`/pokemon?keyword=${input}`);
  };

  return { onChangeHandler, onSubmit };
};

export default useSearchPoke;
