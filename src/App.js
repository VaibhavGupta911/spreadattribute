import './App.css';
const Button = ({ type, children, ...Buttonprops }) => {
  const classname = type === "primary" ? "Primary Button" : "Secondary";
  return (
    <button className={classname} {...Buttonprops} >
      {children}
    </button>
  )
}
const Login = ({ type, children, ...Buttonprops }) => {
  return (
    <Button {...Buttonprops} onClick={() => { alert("loged in ") }}>
      {children}
    </Button>
  );
}
function App() {
  return (
    <div className="App">
      <h2 className="App-header">
        Spread Attribute use
      </h2>
      <Button type="primary" onClick={() => { alert("Signed in ") }}><h2>SignUP</h2></Button>
      <Login ><h2>Login</h2></Login>
    </div>
  );
}

export default App;
