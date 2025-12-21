import React from "react";
import { Outlet ,Link} from "react-router-dom";


const Forum = () => {




  return (
    <div>
       <img src="../src/assets/banner.png" alt="banner image" className="w-6/6 object-cover" />
       <div className="flex justify-center items-center">
      <div className="card w-full lg:w-3/6  bg-white card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-around">
            {/* <div>Questions</div> */}
             <Link to="/forum/questions">
              <div>Questions</div>
            </Link>
            <Link to="/forum/thoughts">
              <div>Thoughts</div>
            </Link>
           
          </h2>
          <hr></hr>

          <p>
            <Outlet />
            
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Forum;
