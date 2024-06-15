import { useEffect, useState } from "react";
import Input from "./Input";
import Popup from "./Popup";
import SelectionList from "./SelectionList";
import { useMembers } from "../api/hooks/useMembers";

export default function MembersListPopup({ onClose, members, setMembers }) {
  const [searchedMembers, setSearchedMembers] = useState([]);
  const [query, setQuery] = useState("");

  const { data, isLoading, dsError } = useMembers(query);

  useEffect(() => {
    const idMembers = members?.map((member) => member.id);

    const searchedMembersJson = data?.users
      ?.map((user) => {
        return {
          id: user.id,
          description: user.username,
          url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
        };
      })
      .filter((user) => !idMembers.includes(user.id));

    setSearchedMembers(searchedMembersJson);
  }, [data, members]);

  function handleRemoveMember(option) {
    setMembers((members) => {
      return members.filter((member) => member.id != option.id);
    });
  }

  function handleAddOption(option) {
    console.log(option);
    setMembers((members) => {
      return [...members, option];
    });
  }

  return (
    <Popup
      width={"w-96"}
      title={"Membros"}
      onClose={onClose}
      className={"absolute shadow-2xl mt-2.5"}
    >
      <Input
        placeHolder={"Pesquisar por nome"}
        autoFocus
        type={"text"}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      {members?.length > 0 && (
        <SelectionList
          options={members}
          title={"Membros da task"}
          isEnableRemove={true}
          onRemove={handleRemoveMember}
        />
      )}
      <SelectionList
        options={searchedMembers}
        title={"Resultados da pesquisa"}
        isEnableRemove={false}
        onConfirm={handleAddOption}
      />
    </Popup>
  );
}
