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
import ApiEndpoint from "../api/ApiEndpoint";
import { useNavigate } from "react-router-dom";

const priorityOptions = [
  {
    value: "LOW",
    description: "LOW",
  },
  {
    value: "MEDIUM",
    description: "MEDIUM",
  },
  {
    value: "URGENTE",
    description: "URGENTE",
  },
];

export default function TaskModal({ onClose }) {
  const navigateTo = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dateLimit, setDateLimit] = useState("");

  const [artefacts, setArtefacts] = useState([]);
  const [members, setMembers] = useState([]);

  const [isVisibleMembersPopup, setIsVisibleMembersPopup] = useState(false);

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

  function handleVisibleMembersPopup() {
    setIsVisibleMembersPopup(!isVisibleMembersPopup);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const request = {
      title,
      description,
      priority,
      dh_limit: dateLimit,
      members: members.map((member) => {
        return { id: member.id };
      }),
      artefacts: artefacts.map((artefact) => {
        return { ds_url: artefact.description };
      }),
    };

    console.log(request);

    const { error } = await ApiEndpoint.createTask(request);

    // TODO Adjust errors
    if (error) {
      return;
    }

    navigateTo("/");
    // TODO Adjust redirecti
  }

  return (
    <>
      <Modal title="Criar tarefa" width="w-2/4" onClose={onClose}>
        <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
          <div className="flex w-full space-x-3">
            <div className="w-3/4 space-y-8">
              <Input
                placeHolder={"Titulo"}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              <TextArea
                rows={4}
                placeHolder="Descricao"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />

              <div className="flex space-x-3">
                <SelectBox
                  options={priorityOptions}
                  placeHolder="PRIORIDADE"
                  onChange={(event) => {
                    setPriority(event.target.value);
                  }}
                />
                <Input
                  placeHolder="Data vencimento"
                  type="datetime-local"
                  onChange={(event) => {
                    setDateLimit(event.target.value);
                  }}
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
                  <IconCircle
                    url={
                      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }
                  />
                </div>
              </CardHeader>
            </div>
          </div>
          <footer className="flex justify-end space-x-3">
            <Button type="secundary" width="w-1/6" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="primary" width="w-1/4">
              Salvar
            </Button>
          </footer>
        </form>
      </Modal>
    </>
  );
}
