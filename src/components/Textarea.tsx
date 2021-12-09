import { ChangeEventHandler, useEffect, useRef } from "react";

type TextareaProps = {
  value: string;
  onChange: ChangeEventHandler;
};

export const Textarea = ({ value, onChange } : TextareaProps) => {
  const inputElement = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
      inputElement.current.select();
    }
  }, []);
  return (
    <textarea ref={inputElement} value={value} onChange={onChange}></textarea>
  );
}

export default Textarea;
