import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import Input from "./Input";
import IconCircle from "./iconCircle";
import Button from "./Button";
import SelectBox from "./SelectBox";
import ApiEndpoint from "../api/ApiEndpoint";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRoles } from "../api/hooks/useRoles";

export default function UserModal({ onClose, user }) {
  let navigate = useNavigate();

  const { data: roles } = useRoles();

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      role: user?.roles[0]?.id,
    },
  });

  // TODO a user can have more than one role, but for now we are limiting it to one

  const roleOptions =
    roles?.map((role) => {
      return {
        value: role.id,
        description: role.type,
        selected: user?.roles[0]?.id === role.id,
      };
    }) ?? [];

  const { errors } = formState;

  const onSubmit = async ({ username, password, role }) => {
    const request = {
      username,
      password: password ?? undefined,
      roles: [
        {
          id: role,
        },
      ],
    };

    const { error } = await ApiEndpoint.updateUser(user.id, request);

    if (error) {
      toast.error("Falha ao atualizar usuario!");
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
  };

  return (
    <Modal title={"Usuario"} width="w-2/4" onClose={onClose}>
      <form
        className="flex flex-col space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-3">
          <IconCircle
            imageHeight="h-20"
            imageWidth="w-20"
            url="https://blog.meupetclub.com.br/wp-content/uploads/2023/08/cachorrinho-feliz-sorrindo-em-fundo-roxo-isolado-scaled.jpg"
          />
          <Input
            id="username"
            register={register}
            validation={{ required: "This field is required" }}
            error={errors?.username?.message}
            label="Nome"
          />
          <Input
            id="password"
            register={register}
            error={errors?.password?.message}
            label="Senha"
            placeHolder="*******"
          />
          <SelectBox
            id="role"
            label="Grupo"
            options={roleOptions}
            register={register}
            validation={{ required: "This field is required" }}
            error={errors?.role?.message}
          />
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
