import './App.css'
import Grandpa from './component/Grandpa/Grandpa'
// import ReuseAbleForm from './component/ReuseAbleForm/ReuseAbleForm'
// import HookForm from './component/HookForm/HookForm'
// import RefForm from './component/RefForm/RefForm'
// import StateFullForm from './component/StateFullForm/StateFullForm'
// import SimpleForm from './component/SimpleForm/SimpleForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('Sign Up Data :', data);
  // }
  // const handleUpdateSubmit = data => {
  //   console.log('Profile Upadate Data :', data)
  // }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseAbleForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}
      ></ReuseAbleForm>

      <ReuseAbleForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateSubmit}
        ButtonOnText='Update'
      ></ReuseAbleForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
