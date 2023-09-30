"use client";

import { Chip, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { UseFormSetValue } from "react-hook-form";
type Props = {
  options: Array<{
    label: string;
    value: string;
  }>;
  errors: any;
  name: string;
  setValue: UseFormSetValue<{ group_name: string; group_members: number }>;
  getValues: UseFormSetValue<{ group_name: string; group_members: number }>;
};
function SelectInput({ options, errors, name, getValues, setValue }: Props) {
  const [values, setValues] = React.useState<any>(
    new Set(options.map((o) => o.value))
  );
  return (
    <Select
      items={options}
      variant="bordered"
      isMultiline={true}
      errorMessage={errors[name]?.message}
      isInvalid={errors[name] ? true : false}
      color={errors[name] ? "danger" : "primary"}
      selectionMode="multiple"
      labelPlacement="outside"
      classNames={{
        trigger: "min-h-unit-12 py-2",
      }}
      renderValue={(items) => {
        return (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Chip key={item.key}>{item.textValue}</Chip>
            ))}
          </div>
        );
      }}
    >
      {(user) => (
        <SelectItem key={user.value} textValue={user.label}>
          <div className="flex gap-2 items-center">
            <p>{user.label}</p>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}

export default SelectInput;
