interface SearchInputProps extends React.ComponentPropsWithoutRef<"input"> {
  handleInput: React.KeyboardEventHandler<HTMLInputElement>;
  className: string;
}

const SearchInput = ({
  handleInput,
  className,
  ...props
}: SearchInputProps) => {
  return (
    <input
      className={`form-control ${className}`}
      onInput={handleInput}
      {...props}
    />
  );
};

export default SearchInput;
