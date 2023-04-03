import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import querystring from "querystring";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export const CLIENT_ID = "7f913a3d400141778756a9af477c97bf";
export const SCOPE = "data:read_write";
const CLIENT_SECRET = "32e9cdf9395744b6bb55d73edae398f8";

export function useTodoistAuth() {
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleTokenExchange() {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");

    if (!isStateCompromised()) {
      try {
        const response = await axios.post(
          "https://todoist.com/oauth/access_token",
          {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
            redirect_uri: "http://localhost:3000/home",
          }
        );
        const token = response.data.access_token;
        localStorage.setItem("accessToken", token);
        setAccessToken(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate("/home")
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("compromised");
    }
  }

  function isStateCompromised() {
    const searchParams = new URLSearchParams(location.search);
    const storedState = localStorage.getItem("state");
    const returnedState = searchParams.get("state");

    if (storedState && returnedState) {
      if (storedState === returnedState) {
        localStorage.removeItem("state");
        return false;
      } else {
        return true;
      }
    }
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
      navigate("/home");
    } else {
      navigate("/")
    }
  }, []);

  function handleLogin() {
    try {
      const state = uuidv4();

      const params = querystring.stringify({
        client_id: CLIENT_ID,
        state: state,
        scope: SCOPE,
      });

      const authorizationUrl = `https://todoist.com/oauth/authorize?${params}`;

      localStorage.setItem("state", state);

      window.location.href = authorizationUrl;
    } catch (err) {
      // toast.error(err);
    }
  };

  const handleLogout = () => {

    localStorage.removeItem("accessToken");
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    setAccessToken(null);
    navigate("/");
  };

  return {
    accessToken,
    handleLogin,
    handleLogout,
    handleTokenExchange,
  };
}

export default useTodoistAuth;
