"use client";

import ModalContainer from "@components/common/modal";
import { Keyboard_shortcuts } from "@data/data";
import { Button } from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};
function KeyboardShortcutsModal({ isOpen, onOpenChange }: Props) {
  return (
    <ModalContainer
      size="4xl"
      scrollBehavior={"inside"}
      isCancelButton={false}
      button={
        <Button onClick={() => onOpenChange(false)} radius="sm" color="primary">
          Ok
        </Button>
      }
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Keyboard Shortcuts"
    >
      <div className="grid grid-cols-2 gap-5 w-full">
        {Keyboard_shortcuts.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <h5 className="text-[#515151] font-bold">{item.title}</h5>
            <div className="space-x-2">
              {item.combination.map((cmd: string, cmdIndex: number) => (
                <Button
                  variant="flat"
                  disabled
                  key={cmdIndex}
                  radius="sm"
                  size="sm"
                >
                  {cmd}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ModalContainer>
  );
}

export default KeyboardShortcutsModal;
