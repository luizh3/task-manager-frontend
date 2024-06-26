import { useState } from "react";
import ApiEndpoint from "../../api/ApiEndpoint";
import Table from "../../components/Table/Table";
import UserModal from "../../components/UserModal";
import { toast } from "react-hot-toast";

export default function TableUsers({ users, navigate }) {
  const [isVisibleUserModal, setIsVisibleUserModal] = useState(false);
  const [userSelected, setUserSelected] = useState({});

  function handleVisibleUserModal() {
    setIsVisibleUserModal((isVisible) => {
      return !isVisible;
    });
  }

  const rows = users?.map((user) => {
    return {
      columns: [
        {
          image_url:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS", // TODO change this for get from useri
          description: user.username,
          style: "flex items-center gap-4",
        },
        {
          badgets:
            user?.roles.map((role) => {
              return {
                color: "bg-green-100 text-green-800",
                description: role.type.toUpperCase(),
              };
            }) ?? [],
        },
        {
          icons: [
            {
              name: "MdOutlineModeEdit",
              size: 25,
              onClick: () => {
                setUserSelected(user);
                handleVisibleUserModal();
              },
            },
            {
              name: "MdDeleteOutline",
              size: 25,
              color: "#DC2626",
              onClick: async () => {
                const { error } = await ApiEndpoint.deleteUser(user.id);

                if (error) {
                  toast.error(error);
                  return;
                }

                navigate("/users", {
                  state: {
                    toast: {
                      type: "success",
                      message: "Sucesso ao deletar usuario!",
                      duration: 3000,
                    },
                  },
                });
                navigate(0);
              },
            },
          ],
          style: "flex space-x-3 cursor-pointer",
        },
      ],
    };
  });

  const tableData = {
    header: [
      {
        description: "Nome",
      },
      {
        description: "Grupos",
      },
      {
        description: "",
        style: "w-4",
      },
    ],
    rows,
  };

  return (
    <div className="flex flex-col w-4/5 my-14 gap-8">
      <label className="w-full text-2xl text-gray-600 font-medium">
        Usuarios
      </label>
      {isVisibleUserModal && (
        <UserModal onClose={handleVisibleUserModal} user={userSelected} />
      )}
      <Table clasName="w-full h-fit" data={tableData}></Table>
    </div>
  );
}
