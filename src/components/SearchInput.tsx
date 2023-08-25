import { useId } from "react";

interface SearchInputProps extends React.ComponentPropsWithoutRef<"input"> {
  handleInput: React.KeyboardEventHandler<HTMLInputElement>;
  className: string;
}

const SearchInput = ({
  handleInput,
  className,
  ...props
}: SearchInputProps) => {
  const inputId = useId();

  return (
    <>
      <label htmlFor={`${inputId}-searchinput`}>Search Input</label>
      <input
        id={`${inputId}-searchinput`}
        className={`form-control ${className}`}
        onInput={handleInput}
        {...props}
      />
    </>
  );
};

export default SearchInput;
