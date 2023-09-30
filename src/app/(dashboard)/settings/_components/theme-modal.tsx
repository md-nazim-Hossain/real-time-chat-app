"use client";

import ModalContainer from "@components/common/modal";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};
function ThemeModal({ isOpen, onOpenChange }: Props) {
  const { theme: activeTheme, setTheme, themes } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState("");
  return (
    <ModalContainer
      button={
        <Button
          onClick={() => {
            setTheme(selectedTheme!);
            onOpenChange(false);
          }}
          radius="sm"
          color="primary"
        >
          Apply
        </Button>
      }
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Choose Theme"
    >
      <RadioGroup defaultValue={activeTheme} onValueChange={setSelectedTheme}>
        {themes.map((theme) => (
          <Radio
            classNames={{
              label: "ml-5",
            }}
            defaultChecked={theme === activeTheme}
            key={theme}
            className="capitalize"
            value={theme}
          >
            {theme}
          </Radio>
        ))}
      </RadioGroup>
    </ModalContainer>
  );
}

export default ThemeModal;
