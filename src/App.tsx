
import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Web_v1 from "./components/Web_v1"



function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route
            // path={"/v1"}
            path={"/"}
            element={<Web_v1 />}
          />
          {/* <Route path={"/form"} element={ } /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
