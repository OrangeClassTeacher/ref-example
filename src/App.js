import "./App.css";
import ParentComponent from "./components/ControlledCheckedBox";
import InputFocus from "./components/InputFocus";
import Play from "./components/Play";
import CatFriends from "./components/Scroll";
import SW from "./components/SW";
import SW1 from "./components/SW1";
import UncontrolledCheckbox from "./components/UnControlledChecked";

function App() {
  return (
    <div className="container">
      {/* <SW /> */}
      <SW1 />
      {/* <Play />
      <InputFocus /> */}
      {/* <div className="row">
        <div className="col-md-6">
          <CatFriends />
        </div>
      </div> */}
      {/* <ParentComponent />
      <UncontrolledCheckbox /> */}
    </div>
  );
}

export default App;
