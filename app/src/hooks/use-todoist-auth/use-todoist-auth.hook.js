import { useNavigate, useLocation } from "react-router-dom";
import { getAuthUrl } from "../../api/auth/get-auth-url.api";
import { login } from "../../api/auth/login.api";

export function useTodoistAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  async function handleRedirect() {
    try {
      const url = await getAuthUrl()
      window.location.replace(url.data['authorization_url'])
    } catch (err) {
      // TODO toast
    }
  }
  
  async function handleLogin() {
    const searchParams = new URLSearchParams(location.search);
    
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    
    try {
      const response = await login({code:code, state:state})
      if(response.status === 204) {
        navigate("/home");
      }
      // TODO toast
    } catch (error) {
      // TODO toast
      console.log(error);
    }
  }

  function handleLogout(){
    // TODO
    navigate("/");
  };

  return {
    handleRedirect,
    handleLogin,
    handleLogout,
  };
}

export default useTodoistAuth;