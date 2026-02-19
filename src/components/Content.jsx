function Main() {
  return (
    <main>
      <div className="devices">
        <img
          src="/images/illustration-devices.svg"
          alt="illustration devices"
        />
      </div>

      <div className="description">
        <div className="part-one">
          <div className="small-head">
            <p>
              <span>New</span> Monograph Dashboard
            </p>
          </div>

          <div className="big-head">
            <h1>Powerful insights into your team</h1>
          </div>

          <div className="sub-text">
            <p>Project planning and time tracking for agile teams</p>
          </div>
        </div>

        <div className="cta">
          <button className="cta-btn">
            <span>Schdule a demo</span>
          </button>
          <p>To see a preview</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
