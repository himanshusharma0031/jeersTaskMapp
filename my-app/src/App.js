import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/DashBoard";
import {SignedIn,SignedOut,RedirectToSignIn, useAuth} from "@clerk/clerk-react"
import { useEffect } from "react";
import API from "./axios";

function App() {
  const {getToken} = useAuth()
  useEffect(() => {
    const setupToken = async () => {
      const token = await getToken();

      if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    };

    setupToken();
  }, [getToken]);
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/" element={<Login />} />

         <Route path="/register" element={<Register />} />
        {/* fallbackRedirectUrl="/dashboard" */}


        <Route path="/dashboard" element={<><SignedIn><Dashboard /></SignedIn>
                                          <SignedOut><RedirectToSignIn/></SignedOut>
                                          </>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
