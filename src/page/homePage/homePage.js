import "./homePage.css";
import { Categories, Header } from "../../component";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="poster img_responsive">
        <div className="content">
          <div className="content2">
            <h1>welcome to Namaste🙏-stream</h1>
            <button className="btn btn__primary">
              <Link to="videolist" className="link__nostyle">
                WATCH NOW
              </Link>
            </button>
          </div>
        </div>
      </div>

      <h4 className="categoryTag">Categories</h4>

      <div className="ctegories flex">
      <Categories/>

       

      </div>
    </>
  );
};
