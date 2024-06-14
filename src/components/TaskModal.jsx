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

export default function TaskModal({ onClose }) {
  const [artefacts, setArtefacts] = useState([]);
  const [isVisibleMembersPopup, setIsVisibleMembersPopup] = useState(false);

  function handleAddArtefact(text) {
    console.log(text);
    setArtefacts((artefacts) => {
      return [...artefacts, text];
    });
  }

  return (
    <>
      <Modal title="Criar tarefa" onClose={onClose}>
        <OptionsCard>
          <ButtonOption
            icon={<TiUserAddOutline />}
            message="Membros"
            onClick={() => {
              setIsVisibleMembersPopup(!isVisibleMembersPopup);
            }}
          ></ButtonOption>
          {isVisibleMembersPopup && (
            <MembersListPopup
              onClose={() => {
                setIsVisibleMembersPopup(!isVisibleMembersPopup);
              }}
            />
          )}
        </OptionsCard>
        <Input placeHolder={"Titulo"} />
        <TextArea rows={4} placeHolder="Descricao" />
        <CardHeader title={"Membros"}>
          <div className="flex">
            <IconCircle
              url={
                "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
            />
          </div>
        </CardHeader>
        <div className="flex space-x-3">
          <SelectBox />
          <Input placeHolder="Data vencimento" type="date" />
        </div>
        <ListView
          onConfirmItem={handleAddArtefact}
          initialItems={artefacts}
          title="Artefatos"
        />
      </Modal>
    </>
  );
}
