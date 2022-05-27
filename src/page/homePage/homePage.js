import "./homePage.css"
import { Header } from "../../component";
import { Link } from "react-router-dom";


export const HomePage = () => {

    return(

        <>
       
       <div className="poster img_responsive">
          <div className="content">

         <div className="content2">
         <h1 >welcome to Namaste🙏-stream</h1>
          <button class="btn btn__primary_outline">
           <Link to = "videolist" className="link__nostyle">EXPLORE</Link>
           
           </button>

         </div>
         </div>
       </div>

       <div className="ctegories flex">
          <h4 className="categoryTag">Categories</h4>
           <div className="card podcast">
             <img src="https://res.cloudinary.com/e-comerce/image/upload/v1653632870/podcast_wpgoik.jpg" alt="podcast" className="img-responsive"/>
                <p className="categoryName">Podcast</p>
           </div>
           <div className="card music">
            <img src="https://res.cloudinary.com/e-comerce/image/upload/v1653634073/music_llmfei.jpg" alt="music" className="img-responsive"/>
           <p className="categoryName"> music</p>
           </div>
           <div className="card sports">
            <img src="https://res.cloudinary.com/e-comerce/image/upload/v1653634065/sports2_dhdwzj.jpg" alt="sports" className="img-responsive"/>
            <p className="categoryName"> sports</p>
           </div>
           <div className="card other">
            <img src="https://res.cloudinary.com/e-comerce/image/upload/v1653634924/fun-at-work_jjqsco.png" alt = "fun" className="img-responsive"/>
            <p className="categoryName"> Funworld</p>
           </div>
       </div>
              </>
    )
}

