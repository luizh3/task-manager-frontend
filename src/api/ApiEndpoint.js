import ApiHelper from "../helpers/ApiHelper";
import FetchOptionsHelper from "../helpers/FetchOptionsHelper";

async function updateStatusTask(idItem, idStatus) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/task/status?id=${idItem}&idStatus=${idStatus}`,
      FetchOptionsHelper.put()
    );

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

async function createTask(request) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/task`,
      FetchOptionsHelper.post(request)
    );

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

async function updateTask(request) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/task`,
      FetchOptionsHelper.put(request)
    );

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

async function deleteTask(idTask) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/task/${idTask}`,
      FetchOptionsHelper.deleteMethod()
    );

    const data = await response.json();

    if (!response.ok) {
      return { error: data?.message ?? "Falha ao deletar task!" };
    }

    console.log(data);

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

async function deleteUser(idUser) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/user/${idUser}`,
      FetchOptionsHelper.deleteMethod()
    );

    const data = await response.json();

    if (!response.ok) {
      return { error: data?.message ?? "Falha ao deletar Usuario!" };
    }

    console.log(data);

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

async function updateUser(idUser, request) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/user/${idUser}`,
      FetchOptionsHelper.put(request)
    );

    const data = await response.json();

    if (!response.ok) {
      return { error: data?.message ?? "Falha ao atualizar Usuario!" };
    }

    console.log(data);

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

async function login(request) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/session/authenticate`,
      FetchOptionsHelper.post(request)
    );

    const data = await response.json();

    if (!response.ok) {
      return { error: data?.message ?? "Falha ao realizar o login!" };
    }

    console.log(data);

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

async function register(request) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/user`,
      FetchOptionsHelper.post(request)
    );

    const data = await response.json();

    if (!response.ok) {
      return { error: data?.message ?? "Falha ao registrar Usuario!" };
    }

    console.log(data);

    return { data };
  } catch (error) {
    console.error(error.message);
    return { error };
  }
}

export default {
  updateStatusTask,
  createTask,
  updateTask,
  deleteTask,
  deleteUser,
  updateUser,
  login,
  register,
};
