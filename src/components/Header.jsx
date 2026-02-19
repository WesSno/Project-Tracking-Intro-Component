function NavigationBar(props) {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <img src="./images/logo.svg" alt="logo" />
        </div>

        {/****** DESKTOP NAVIGATION ***********/}
        <nav className="desktop-nav">
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <div className="dot-separator"></div>
            <li>
              <a href="#" className="login">
                LOGIN
              </a>
            </li>
          </ul>
        </nav>

        {/*Mobile Hamburger / Close */}
        <div className="mobile-toggle">
          {!isMenuOpen && (
            <img
              src="./images/icon-hamburger.svg"
              alt="open icon"
              onClick={() => setIsMenuOpen(true)}
            />
          )}

          {isMenuOpen && (
            <img
              src="./images/icon-close.svg"
              alt="close icon"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <hr className="nav-line" />
            </li>

            <li>
              <a href="#" className="login">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavigationBar;
