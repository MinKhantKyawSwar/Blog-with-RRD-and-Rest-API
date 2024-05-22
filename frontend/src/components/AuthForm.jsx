import { Link, Form, useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isLogin = searchParams.get("mode") === "login";

  return (
    <section className="form-section">
      <div>
        <p>{isLogin ? "Login to your account" : "Create a new account now"}</p>
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className="btn login-btn">
            {isLogin ? "Login" : "Register "}
          </button>
        </Form>
        {isLogin ? (
          <p className="create-acc">
            Don't you have an account?{" "}
            <Link to={"/auth?mode=register"}>Create account</Link>
          </p>
        ) : (
          <p className="create-acc">
            Do you already have an account?{" "}
            <Link to={"/auth?mode=login"}>Login here</Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default AuthForm;
