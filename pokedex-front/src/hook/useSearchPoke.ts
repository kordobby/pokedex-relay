import { useState } from "react";
import { useNavigate } from "react-router";
const useSearchPoke = () => {
  const data = ["이상해씨", "이상해꽃"];

  const [input, setInput] = useState<string>("");
  const [autoComplete, setAutoComplete] = useState<string[]>([]);
  const navigate = useNavigate();

  /* 키워드 자동완성 */
  // const autoSearch = (text: string) => {
  //   const result = data.filter((value) => {
  //     if (value.indexOf(text) === 0) {
  //       return value;
  //     }
  //   });
  //   setAutoComplete(result);
  // };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event?.target?.value);
    // autoSearch(event?.target?.value);
  };

  const onSubmit = () => {
    navigate(`/pokemon?keyword=${input}`);
  };

  return { onChangeHandler, onSubmit };
};

export default useSearchPoke;
