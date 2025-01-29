import { BrowserRouter as Router, Outlet, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Menu from "./component/Menu/Menu";
import "./styles/global.scss";
import Footer from "./component/Footer/Footer";
import { pathConstant } from "./constents/pathConstant";
import Home from "./pages/Admin/Home/Home";
import Users from "./pages/Admin/Users/Users";
import Products from "./pages/Admin/Products/Products";
import Product from "./pages/Admin/Product/Product";
import User from "./pages/Admin/User/User";
import Login from "./component/login/Login";
import { PrivateRoute } from "./constents/PrivateRoute";
import Notfound from "./component/Notfound/Notfound";
import SignUp from "./component/signup/SignUp";

function App() {
  const isAuthenticated = localStorage.getItem('secret_key');
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="manucontainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const allPrivateRoutes = [
    { path: pathConstant.users.home, component: <Home /> },
    { path: "/users", component: <Users /> },
    { path: "/products", component: <Products /> },
    { path: "/products/:id", component: <Product /> },
    { path: "/user/:id", component: <User /> },
  ];

  const allPublicRoutes = [
    { path: pathConstant.users.login, component: <Login /> },
    { path: pathConstant.users.signup, component: <SignUp /> },
  ];

  return (
    <Router>
      <Routes>
      {isAuthenticated && <Route path="*" element={<Navigate to={pathConstant.users.login} replace />} />}
        <Route path="/" element={<Login />} />
        {allPublicRoutes.map((item, index) => (
          <Route path={item.path} element={item.component} key={index} />
        ))}

        <Route element={<Layout />}>
          {allPrivateRoutes.map((item, index) => (
            <Route
              path={item.path}
              element={
                <PrivateRoute>
                  {item.component}
                </PrivateRoute>
              }
              key={index}
            />
          ))}
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;