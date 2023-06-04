import "./App.css";
import AddMeta from "./components/AddMeta/AddMeta";
import Metas from "./components/metas/Metas";
import HowWeek from "./components/HowWeek/HowWeek";
import Viutify from "./components/viutify/viutify";

function App() {
  return (
    <>
      <Viutify />
    </>
  );
}

export default App;

/* {/* {isAuthenticated ? (
        <div>
          <Home />
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}
       <Home /> * */
