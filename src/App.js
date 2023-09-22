import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./pages/Room";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/room/:id" element={<Room />}/>
          <Route exact path="/" element={<Main />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
