import useTodoistAuth from "../../../hooks/use-todoist-auth/use-todoist-auth.hook";

export function Login() {
  const { handleRedirect } = useTodoistAuth();

  return (
    <>
      <div>
        <button onClick={handleRedirect}>Log in with Todoist</button>
      </div>
    </>
  );
}
