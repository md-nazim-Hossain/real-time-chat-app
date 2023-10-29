"use client";
import { Input } from "@nextui-org/react";

type Props = {
  register: any;
  errors: any;
  name: string;
  label?: string;
  placeholder?: string;
  [key: string]: any;
};
function TextInput({
  register,
  errors,
  label,
  name,
  placeholder,
  ...rest
}: Props) {
  return (
    <Input
      radius="sm"
      {...rest}
      variant="bordered"
      fullWidth
      placeholder={placeholder}
      {...register(name)}
      isInvalid={errors[name] ? true : false}
      errorMessage={errors[name]?.message}
      color={errors[name] ? "danger" : "primary"}
      label={label}
    />
  );
}

export default TextInput;
