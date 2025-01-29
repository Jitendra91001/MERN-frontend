import { Link, useNavigate } from "react-router-dom";
import "./sign.scss";
import { useState } from "react";
import { createUser } from "../../redux/features/user/userThunk";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { pathConstant } from "../../constents/pathConstant";


const SignUp = () => {
  const [profileImage, setProfileImage] = useState("");
  const [formData, setFormdata] = useState<any>({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [file, setFile] = useState<any>(null);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProfileImage(url);
    }
  };

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormdata((pre: any) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");
    const avatardata = new FormData();
    avatardata.append("files", file);
    avatardata.append("data",JSON.stringify(formData))

    dispatch(createUser(avatardata))
      .unwrap()
      .then((res: any) => {
        if (res?.success === true) {
          toast.success(res?.message);
          setFormdata({})
          navigate(pathConstant.users.login)
        } else {
          toast.error(res?.message);
        }
      });
  };

  return (
    <div className="signbase">
      <div className="signup-container">
        <div className="left-section">
          <div className="content">
            <h1>Join our platform and simplify your management.</h1>
            <p>
              Sign up now to access our user-friendly admin dashboard for
              e-commerce management.
            </p>
            <div className="illustration">
              <img src="/team.png" alt="Illustration" />
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="logo">
            <img src="/logo.svg" alt="E Spurt Logo" />
            <span>E Spurt</span>
          </div>
          <div className="signup-form">
            <h2>Create an Account</h2>
            <p>Please fill in the details to sign up</p>

            <form>
              <div className="profile-image-upload">
                <input
                  type="file"
                  id="profile-image"
                  accept="image/*"
                  hidden
                  onChange={handleChange}
                />
                <label htmlFor="profile-image">
                  <img
                    src={profileImage || "/profile.png"}
                    alt="Profile"
                    id="preview-image"
                  />
                  <span>Upload Profile Picture</span>
                </label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChangeInput}
                  required
                />
              </div>
              {/* <div className="form-group">
                    <select name="role" required>
                        <option value="" disabled selected>Select your role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="user">User</option>
                    </select>
                </div> */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="signup-button"
              >
                Sign Up
              </button>
            </form>
            <p className="login-text">
              Already have an account? <Link to={pathConstant.users.login}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
