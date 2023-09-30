import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  children: React.ReactNode;
  title: string | React.ReactNode;
  trigger?: React.ReactNode;
  button?: React.ReactNode;
  isCancelButton?: boolean;
  footer?: React.ReactNode;
  [x: string]: any;
};
export default function ModalContainer({
  isOpen,
  onOpenChange,
  children,
  title,
  trigger,
  button,
  isCancelButton = true,
  ...rest
}: Props) {
  return (
    <>
      {trigger}
      <Modal
        {...rest}
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="sm"
        classNames={{
          backdrop:
            "bg-gradient-to-bl from-black/50 to-black/10 backdrop-opacity-10",
          base: "dark:bg-dark-light bg-light ",
          wrapper: "overflow-hidden",
          body: "scroll",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              {(button || isCancelButton) && (
                <ModalFooter>
                  {isCancelButton && (
                    <Button
                      color="default"
                      variant="bordered"
                      radius="sm"
                      onPress={onClose}
                      className="border-1"
                    >
                      Cancel
                    </Button>
                  )}
                  {button}
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
