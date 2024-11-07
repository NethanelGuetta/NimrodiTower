import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

// const router = createBrowserRouter([
//  //FILL HERE
// ]);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Routes>

            <Route path="/" element={<Reception />}> </Route>

            <Route path="/floor/:index"
              element={
                <PrivateRoute>
                  <Floor />
                  
                </PrivateRoute>
              }>

            </Route>

            <Route path="/forbidden" element={<Forbidden />}> </Route>  


          </Routes>
        </div>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
