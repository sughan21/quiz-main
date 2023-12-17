import { CgProfile } from "react-icons/cg";
import "./style/login.css";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../firebase/index";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../Context";
const LoginForm = ({ no }) => {
  const { formFields, setFormFields, setUser, logoutUser, userEmail } =
    useUser();
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const loginHandler = () => {
    setUser(true);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    navigate("/home");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("hit");
    if (email && password) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log({ user });
        setFormFields({ email: "", password: "", confirmPassword: "" });

        if (user) {
          setUser(user.email, user.displayName);
          alert("Success Login");
          navigate("/home");
          console.log(user.email);
          console.log(user.displayName);
        }
      } catch (err) {
        console.log("Error Occurd while Login", err.message);
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <section>
      <div className="loginpage">
        <header>
          <div className="title" onClick={no}>
            Quiz
          </div>
          <div className="profile-hi">Hi User</div>
        </header>
        {/* {user ? (
        <SignUp />
      ) : (
        <LoginForm
          loginHandler={loginHandler}
          no={no}
          signInWithGoogle={signInWithGoogle}
        />
      )} */}
      </div>
      <div className="login">
        Login
        <span className="login-width"></span>
      </div>
      <form className="user-login" onSubmit={submitHandler}>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={changeHandler}
          className="user"
          placeholder="User"
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={changeHandler}
          className="password"
          placeholder="Password"
        />
        <button className="sign">Signin</button>

        <button className="google-sign" onClick={signInWithGoogle}>
          Google Sign
        </button>
        <Link to="/signup">
          <button className="signForm" onClick={loginHandler}>
            Signup
          </button>
        </Link>
      </form>
    </section>
  );
};

export default LoginForm;
