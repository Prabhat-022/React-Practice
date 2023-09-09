import './App.css'
import Card from './Tailwind/Card'
// import Name from './Practice/Name'


function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 text-center m-7">
        Hello world!
      </h1>
      <div className="flex ml-10  p-4">
        {/* <Card  usernames ="Surbhi" channel ="chaiaurcode" someObj={myObj} /> */}
        <Card username="surbhi" btnTxt ="Visit me"/>
        <Card username="langofrod" btnTxt =" Click Me"/>
        <Card username="jenofer" />
        <Card username="Abla" />
      </div>
      {/* <Name/> */}
    </>
  )
}

export default App
