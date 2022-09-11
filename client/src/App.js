import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import AddProjectModal from "./components/AddProjectModal";
import AddClientModal from "./components/AddClientModal";

function App() {
  return (
    <>
      <NavBar />

      <br />

      <Clients />

      <div className="flex justify-end items-end p-3 m-3">
        <AddClientModal />
      </div>

      <hr className='broder border-grey-300 border-2 m-3' />

      <Projects />

      <div className="flex justify-end items-end p-3 m-3">
        <AddProjectModal />
      </div>
    </>
  );
}

export default App;