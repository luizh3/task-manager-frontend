import { useState } from "react";
import Input from "./Input";
import ListView from "./ListView";
import Modal from "./Modal";
import SelectBox from "./SelectBox";
import TextArea from "./TextArea";
import OptionsCard from "./OptionsCard";
import MembersListPopup from "./MembersListPopup";
import ButtonOption from "./ButtonOption";
import IconCircle from "./iconCircle";
import CardHeader from "./CardHeader";
import { TiUserAddOutline } from "react-icons/ti";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// TODO change for options from backend
const priorityOptionsDefault = [
  {
    value: "LOW",
    description: "BAIXO",
    selected: false,
  },
  {
    value: "MEDIUM",
    description: "MEDIO",
    selected: false,
  },
  {
    value: "URGENT",
    description: "URGENTE",
    selected: false,
  },
];

const defaultUserImage =
  "https://cdn.britannica.com/66/103766-131-9AF4E5B9/cheetah-distances-land-animals-species-Asia-Africa.jpg?w=400&h=225&c=crop";

export default function TaskModal({
  titleModal,
  item,
  onClose,
  onSumitApiCall,
}) {
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      title: item?.title,
      description: item?.description,
      dh_limit: item?.dh_limit,
      priority: item?.priority,
    },
  });
  const { errors } = formState;

  const navigateTo = useNavigate();

  // TODO implement generic on component and get values from form
  const [artefacts, setArtefacts] = useState(
    item?.artefacts?.map((artefact, index) => {
      return { index, description: artefact.ds_url };
    }) ?? []
  );

  const [members, setMembers] = useState(
    item?.members?.map((member) => {
      return {
        id: member.id,
        url: member.ds_url ?? defaultUserImage,
        description: member.username,
      };
    }) ?? []
  );

  const [isVisibleMembersPopup, setIsVisibleMembersPopup] = useState(false);

  const priorityOptions = item
    ? priorityOptionsDefault.map((option) => {
        if (option.value === item.priority) {
          return { ...option, selected: true };
        }
        return option;
      })
    : priorityOptionsDefault;

  function handleAddArtefact(text) {
    console.log(text);
    setArtefacts((artefacts) => {
      return [
        ...artefacts,
        {
          description: text,
          index: artefacts.length + 1,
        },
      ];
    });
  }

  function handleVisibleMembersPopup(event) {
    event.preventDefault();
    setIsVisibleMembersPopup(!isVisibleMembersPopup);
  }

  const onSubmit = async ({ title, description, priority, dh_limit }) => {
    const request = {
      title,
      description,
      priority,
      dh_limit,
      members: members?.map((member) => {
        return { id: member.id };
      }),
      artefacts: artefacts?.map((artefact) => {
        return { ds_url: artefact.description };
      }),
    };

    console.log(request);

    try {
      onSumitApiCall(request);
      navigateTo("/", {
        state: {
          toast: {
            type: "success",
            message: "Sucesso ao criar task!",
            duration: 3000,
          },
        },
      });
      navigateTo(0);
    } catch (error) {
      console.error(error);
      toast.error("Falha ao criar task!");
      return;
    }
  };

  return (
    <Modal title={titleModal} width="w-2/4" onClose={onClose}>
      <form
        className="flex flex-col space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full space-x-3">
          <div className="w-3/4 space-y-8">
            <Input
              id="title"
              placeHolder={"Titulo"}
              register={register}
              validation={{ required: "This field is required" }}
              error={errors?.title?.message}
            />
            <TextArea
              rows={4}
              id="description"
              placeHolder="Descricao"
              register={register}
              validation={{ required: "This field is required" }}
              error={errors?.description?.message}
            />

            <div className="flex space-x-3">
              <SelectBox
                id="priority"
                options={priorityOptions}
                register={register}
                validation={{ required: "This field is required" }}
              />
              <Input
                id="dh_limit"
                placeHolder="Data vencimento"
                type="datetime-local"
                register={register}
              />
            </div>
            <ListView
              onConfirmItem={handleAddArtefact}
              initialItems={artefacts}
              title="Artefatos"
            />
          </div>
          <div className="w-1/4 space-y-3 bg-gray-300 rounded p-2">
            <OptionsCard>
              <ButtonOption
                icon={<TiUserAddOutline />}
                message="Membros"
                onClick={handleVisibleMembersPopup}
              ></ButtonOption>
              {isVisibleMembersPopup && (
                <MembersListPopup
                  onClose={handleVisibleMembersPopup}
                  members={members}
                  setMembers={setMembers}
                />
              )}
            </OptionsCard>
            <CardHeader title={"Membros"}>
              <div className="flex">
                {members?.map((member) => (
                  <IconCircle key={member.id} url={member.url} />
                ))}
              </div>
            </CardHeader>
          </div>
        </div>
        <footer className="flex justify-end space-x-3">
          <Button styleType="secundary" width="w-1/6" onClick={onClose}>
            Cancelar
          </Button>
          <Button styleType="primary" width="w-1/4" type="submit">
            Salvar
          </Button>
        </footer>
      </form>
    </Modal>
  );
}
