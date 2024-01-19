import { Outlet } from "react-router-dom";
import "./section.css";
function Section() {
  return (
    <section>
      <div className="main-section">
        <Outlet />
        <div className="about">
          <div>
            <span>About</span>
            <h1>Evangadi Networks</h1>
          </div>
          <div>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>
            <br />
            <br />
            <p>
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
          </div>
          <div className="btn">
            <a href="#">How It Works</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
