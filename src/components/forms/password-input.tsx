"use client";

import { Input } from "@nextui-org/react";
import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
type Props = {
  register: any;
  errors: any;
  name: string;
  label?: string;
  placeholder?: string;
};
function PasswordInput({ register, errors, name, label, placeholder }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      radius="sm"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      label={label || "Password"}
      isInvalid={errors[name] ? true : false}
      errorMessage={errors[name]?.message}
      placeholder={placeholder}
      {...register(name)}
      color={errors[name] ? "danger" : "primary"}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {!isVisible ? (
            <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <Eye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
    />
  );
}

export default PasswordInput;
