import { useEffect } from "react";
import useTodoistAuth from "../../../hooks/use-todoist-auth/use-todoist-auth.hook";

export function Auth() {
  const {handleLogin} = useTodoistAuth();
  useEffect(() => {
    handleLogin();
  }, [])
  return (
    <>
      <h1>Carregando</h1>
    </>
  );
}
