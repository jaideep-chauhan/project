import React from "react";
import video from "../imgs/toy-video.mp4";

export default function CoustomToy() {
  return (
    <>
      <div className="coustom-toy container-sec">
        <div className=" custom-toy-l"></div>
        <div className="toy-info">
        <h1 className="heading Bar-bottom">Customize Toy</h1>
         <form>
          <label>Upload File :</label>
          <input
              type="file"
              id="img"
              name="img"
              accept="*img"
              title="Choose Images or Drag and Drop here"
           />
            
  <label>Size :</label>
  <div className="size-radio flex">
  <input type="radio" id="size5" name="fav_language" defaultValue="size" />
  &nbsp; <label htmlFor="size5">5 Inch</label>&nbsp;&nbsp;&nbsp;
  <input type="radio" id="size10" name="fav_language" defaultValue="size10" />
  &nbsp; <label htmlFor="size10">10 Inch</label></div>

  <label>Material :</label>
            <select name="material" id="select">
              <option value="Plastic">Plastic</option>
              <option value="Rubber">Rubber</option>
              <option value="Alloy">Alloy</option>
              <option value="Wood">Wood</option>
            </select>
            <br/>
            <label id="estimate">Estimated Price: <span className="price">$12.55</span></label>
</form>
{/* <button id="estimate">Estimated</button> */}

<button id="ship-add">Add Shipping Address</button>

        </div>
        <div className="toy-video">
        <video width="320" height="240" id="vid" autoPlay muted>
  <source src={video} type="video/mp4" />
  {/* <source src="https://www.w3schools.com/html/movie.mp4" type="video/ogg" /> */}
</video>



           
        </div>
      </div>
    </>
  );
  
}
