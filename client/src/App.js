import Messenger from "./components.jsx/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = ''
  return (
    <GoogleOAuthProvider clientId="clientId">
    <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
