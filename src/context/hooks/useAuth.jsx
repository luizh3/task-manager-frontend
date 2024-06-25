import { useState, useEffect } from "react";

import LocalStorageHelper from "../../helpers/LocalStorageHelper";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = LocalStorageHelper.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(token) {
    LocalStorageHelper.setItem("token", `Bearer ${token}`);
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    LocalStorageHelper.removeItem("token");
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
