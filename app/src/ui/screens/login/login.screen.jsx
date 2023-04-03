import useTodoistAuth from "../../../hooks/use-todoist-auth/use-todoist-auth.hook";

export function Login() {
  const { handleLogin } = useTodoistAuth();

  return (
    <>
      <div>
        <button onClick={handleLogin}>Log in with Todoist</button>
      </div>
    </>
  );
}
