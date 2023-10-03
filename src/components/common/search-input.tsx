import { Button, Input } from "@nextui-org/react";
import { MagnifyingGlass } from "phosphor-react";

function SearchInput() {
  return (
    <Input
      isClearable
      radius="full"
      classNames={{
        input: [
          "bg-transparent",
          "text-secondary",
          "placeholder:text-secondary",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "dark:bg-theme-dark bg-theme-light h-[50px] text-secondary px-2",
          "focus-within:!bg-theme-light dark:focus-within:!bg-theme-dark",
          "hover:!bg-theme-light dark:hover:!bg-theme-dark",
          "!cursor-text",
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <div className="w-12 flex justify-center items-end overflow-hidden rounded-md">
          <Button
            size="md"
            variant="light"
            color="primary"
            className="hover:!bg-transparent"
            fullWidth
          >
            <MagnifyingGlass className="text-secondary" size={24} />
          </Button>
        </div>
      }
    />
  );
}

export default SearchInput;
