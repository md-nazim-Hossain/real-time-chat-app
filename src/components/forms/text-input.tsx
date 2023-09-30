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
  name,
  label,
  placeholder,
  ...rest
}: Props) {
  return (
    <Input
      radius="sm"
      {...rest}
      variant="bordered"
      label={label || "Email"}
      placeholder={placeholder}
      {...register(name)}
      isInvalid={errors[name] ? true : false}
      errorMessage={errors[name]?.message}
      color={errors[name] ? "danger" : "primary"}
    />
  );
}

export default TextInput;
