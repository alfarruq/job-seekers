
import "./sign.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="left-panel">
        <h1>Find Great Work</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim <br />
          bibendum sollicitudin egestas accumsan, ut mattis.
        </p>
        <div className="job-card">
          <div className="job-icon">💻</div>
          <h2>Developer</h2>
          <p>
            Jobs is a curated job board of the best jobs for developers,
            designers, and marketers in the tech industry.
          </p>
          <ul>
            <li>211K+ contracts</li>
            <li>1,665 skills</li>
          </ul>
          <button className="browse-job">Browse Job</button>
        </div>
      </div>
      <div className="right-panel">
        <div className="login-box">
          <h2>Hey There, Welcome to Ngull!</h2>
          <button className="social-login apple">Continue with Apple</button>
          <button className="social-login google">Continue with Google</button>
          <div className="divider">Or login with</div>
          <form>
            <input type="text" placeholder="Full Name" className="input-field" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="signup-option">
            Dont have an account? <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
