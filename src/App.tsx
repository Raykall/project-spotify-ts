import { ApplicationProvider } from "state/hooks/useApplication";
import Router from "./routes/routes";

function App() {
  return (
    <ApplicationProvider>
      <Router />
    </ApplicationProvider>
  );
}

export default App;
