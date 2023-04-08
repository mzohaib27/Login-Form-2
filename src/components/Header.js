import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="circle"></div>

            <header className="myHead text-center">
              <i className="far fa-user"></i>
              <p>LOGIN</p>
            </header>

            <form className="main-form text-center">
              <div className="form-group my-0">
                <label>
                  <i className="fas fa-user"></i>
                  <input
                    className="myInput"
                    type="text"
                    placeholder="Username"
                    required
                  />
                </label>
              </div>

              <div className="form-group my-0">
                <label>
                  <i className="fas fa-lock"></i>
                  <input
                    className="myInput"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </label>
              </div>

              <label className="check_1">
                <input className="form-check-label" type="checkbox" checked />
                Remember Me
              </label>

              <div className="form-group">
                <label>
                  <input
                    className="form-control button"
                    type="button"
                    value="LOGIN"
                  />
                </label>
              </div>
              <span className="check_1">Forget Password</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
