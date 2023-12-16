import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyforVendors from "./pages/ApplyforVendors";

import Users from "./pages/admin/Users";
import NewItem from "./pages/NewItem";
import ApplyDoctor from "./pages/ApplyDoctor";





function App() {
    const { loading } = useSelector((state) => state.alerts);
    return ( <
        >
        <
        BrowserRouter > {
            loading ? ( <
                Spinner / >
            ) : ( <
                Routes >
                // <
                Route path = "/apply-doctor"
                element = { <
                    ProtectedRoute >
                    <
                    ApplyDoctor / >
                    <
                    /ProtectedRoute>
                }
                /> <
                Route path = "/admin/users"
                element = { <
                    ProtectedRoute >
                    <
                    Users / >
                    <
                    /ProtectedRoute>
                }
                /> 

                <
                Route path = "/newitem"
                element = { <
                    ProtectedRoute >
                    <
                    NewItem > < /NewItem>  < /
                    ProtectedRoute >
                }
                />  <
                Route path = "/applyvendors"
                element = { <
                    ProtectedRoute >
                    <
                    ApplyforVendors > < /ApplyforVendors>  < /
                    ProtectedRoute >
                }
                /> 

                <
                Route path = "/login"
                element = { <
                    PublicRoute >
                    <
                    Login / >
                    <
                    /PublicRoute>
                }
                /> <
                Route path = "/register"
                element = { <
                    PublicRoute >
                    <
                    Register / >
                    <
                    /PublicRoute>
                }
                /> 

                <
                Route path = "/"
                element = { <
                    ProtectedRoute >
                    <
                    HomePage / >
                    <
                    /ProtectedRoute>
                }
                /> < /
                Routes >
            )
        } <
        /BrowserRouter> < / >
    );
}

export default App;