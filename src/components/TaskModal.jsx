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
import { MdDeleteOutline } from "react-icons/md";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ApiEndpoint from "../api/ApiEndpoint";
import DataHelper from "../helpers/DataHelper";
import LimitDateBadget from "./LimitDateBadget";

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
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"; // TODO change this for get from user

export default function TaskModal({
  titleModal,
  item,
  onClose,
  onSumitCallback,
  successMessage,
  errorMessage,
}) {
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      title: item?.title,
      description: item?.description,
      dh_limit: DataHelper.toWithoutSeconds(item?.dh_limit),
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

  function handleRemoveArtefact(item) {
    setArtefacts((artefacts) => {
      return artefacts.filter((artefact) => artefact.index !== item.index);
    });
  }

  function handleVisibleMembersPopup(event) {
    event.preventDefault();
    setIsVisibleMembersPopup(!isVisibleMembersPopup);
  }

  const onSubmit = async ({ title, description, priority, dh_limit }) => {
    const request = {
      id: item?.id,
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

    const { error } = await onSumitCallback(request);

    if (error) {
      toast.error(errorMessage);
      return;
    }

    navigateTo("/", {
      state: {
        toast: {
          type: "success",
          message: successMessage,
          duration: 3000,
        },
      },
    });
    navigateTo(0);
  };

  const deleteTask = async (event) => {
    event.preventDefault();

    const { error } = await ApiEndpoint.deleteTask(item.id);

    if (error) {
      toast.error(error);
      return;
    }

    navigateTo("/", {
      state: {
        toast: {
          type: "success",
          message: "Tarefa excluida com sucesso!",
          duration: 3000,
        },
      },
    });
    navigateTo(0);
  };

  return (
    <Modal title={titleModal} width="w-2/4" onClose={onClose}>
      {item && item.dh_limit && (
        <LimitDateBadget
          dhLimit={item?.dh_limit}
          dhCreated={item?.dh_created}
        />
      )}
      <form
        className="flex flex-col space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full space-x-3">
          <div className="w-3/4 space-y-4">
            <Input
              id="title"
              register={register}
              validation={{ required: "This field is required" }}
              error={errors?.title?.message}
              label="Titulo"
            />
            <TextArea
              rows={4}
              id="description"
              label="Descricao"
              register={register}
              validation={{ required: "This field is required" }}
              error={errors?.description?.message}
            />
            <div className="flex space-x-3">
              <SelectBox
                id="priority"
                label="Prioridade"
                options={priorityOptions}
                register={register}
                validation={{ required: "This field is required" }}
              />
              <Input
                id="dh_limit"
                label="Data vencimento"
                type="datetime-local"
                register={register}
              />
            </div>
            <ListView
              onConfirmItem={handleAddArtefact}
              initialItems={artefacts}
              onDeleteItem={handleRemoveArtefact}
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
              {item?.id && (
                <ButtonOption
                  icon={<MdDeleteOutline />}
                  message="Excluir"
                  onClick={deleteTask}
                ></ButtonOption>
              )}
              {isVisibleMembersPopup && (
                <MembersListPopup
                  onClose={handleVisibleMembersPopup}
                  members={members}
                  setMembers={setMembers}
                />
              )}
            </OptionsCard>
            <CardHeader title={"Membros"}>
              <div className="flex space-x-1">
                {members?.map((member) => (
                  <IconCircle
                    key={member.id}
                    url={member.url}
                    description={member.description}
                  />
                ))}
                {!members?.length && (
                  <div className="font-medium text-sm text-gray-500">
                    Nenhum membro!
                  </div>
                )}
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
