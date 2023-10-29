"use client";

import { Input } from "@nextui-org/react";
import { ChangeEvent, useRef } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  keyName: string;
  inputs: string[];
  [key: string]: any;
};
function CodeForm({ inputs, keyName }: Props) {
  const codeRef = useRef<HTMLInputElement>(null);
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const handleChangeNextField = (
    event: ChangeEvent<HTMLInputElement>,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => any
  ) => {
    const { maxLength, value, name } = event.target;
    const fieldIndex = name.replace(keyName, "");
    const nextField = document.querySelector(
      `input[name=${keyName}${+fieldIndex + 1}]`
    ) as HTMLInputElement | null;
    if (value.length > maxLength) {
      event.target.value = value[0];
    }
    if (value.length === maxLength && +fieldIndex < 6 && nextField !== null) {
      nextField.focus();
    }
    handleChange(event);
  };
  return (
    <div className="flex justify-center gap-5 items-center" ref={codeRef}>
      {inputs.map((input, index) => {
        const name = `${keyName}${index + 1}`;
        return (
          <Input
            maxLength={1}
            key={input}
            size="lg"
            radius="sm"
            variant="bordered"
            fullWidth
            placeholder={"-"}
            {...register(name)}
            isInvalid={errors[name] ? true : false}
            color={errors[name] ? "danger" : "primary"}
            classNames={{
              input: "placeholder:text-center text-center",
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeNextField(e, register(name).onChange)
            }
            onFocus={(event: any) => event.currentTarget.select()}
          />
        );
      })}
    </div>
  );
}

export default CodeForm;
