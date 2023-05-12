const SearchInput = ({ handleInput, className, ...props }) => {
  return (
    <input
      className={`form-control ${className}`}
      onInput={handleInput}
      {...props}
    />
  );
};

export default SearchInput;
