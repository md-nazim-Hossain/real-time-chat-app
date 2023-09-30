import ModalContainer from "@components/common/modal";
import SelectInput from "@components/forms/select-input";
import TextInput from "@components/forms/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
const createGroupSchema = z.object({
  group_name: z.string().nonempty("Group name is required"),
  group_members: z.number().min(1, "Group members is required"),
});

type ICreateGroupProps = z.infer<typeof createGroupSchema>;
type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

function CreateGroup({ isOpen, onOpenChange }: Props) {
  const {
    setValue,
    getValues,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateGroupProps>({
    resolver: zodResolver(createGroupSchema),
  });
  const onSubmit: SubmitHandler<ICreateGroupProps> = async (
    values: ICreateGroupProps
  ) => {
    console.log(values);
    reset();
  };
  return (
    <ModalContainer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Create New Group"
      isCancelButton={false}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pb-1">
        <TextInput
          errors={errors}
          register={register}
          name="group_name"
          label="Group Name"
        />
        <SelectInput
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
          ]}
          errors={errors}
          name="group_members"
          setValue={setValue}
          getValues={getValues}
        />

        <div className="flex justify-end gap-3">
          <Button
            onPress={() => onOpenChange(false)}
            className="font-semibold border-1"
            radius="sm"
            variant="bordered"
          >
            Cancel
          </Button>
          <Button
            className="font-semibold"
            radius="sm"
            color="primary"
            type="submit"
          >
            Create Group
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
}

export default CreateGroup;
