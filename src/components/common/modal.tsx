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
};
export default function ModalContainer({
  isOpen,
  onOpenChange,
  children,
  title,
  trigger,
  button,
}: Props) {
  return (
    <>
      {trigger}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="sm"
        classNames={{
          backdrop:
            "bg-gradient-to-bl from-black/50 to-black/10 backdrop-opacity-10",
          base: "dark:bg-dark-light bg-light",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  variant="bordered"
                  radius="sm"
                  onPress={onClose}
                  className="border-1"
                >
                  Cancel
                </Button>
                {button}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
