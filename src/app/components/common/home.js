import React from "react";
const images = [
  {
    url: "https://images.unsplash.com/photo-1683644673880-dadc9f45b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Image 1",
    text: "Discover",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0746/4386/5884/files/r3.webp?v=1682514876",
    title: "Image 2",
    text: "Discover",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0746/4386/5884/products/s2.webp?v=1682080504",
    title: "Image 3",
    text: "Discover",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0746/4386/5884/files/r2.webp?v=1682514792",
    title: "Image 4",
    text: "Discover",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0746/4386/5884/products/VictoriaBeckham_RuchedBackMidiDress_LARGESHELLS-BLACK_1223WDR004762A_2700_4050_247_WHITE_LR_FLATSHOTS_Model1_JPG_533x_0073c8be-2fca-4258-9cb7-ae22be954f7b.jpg?v=1682319146",
    title: "Image 5",
    text: "Discover",
  },
];
function HomePage() {
  return (
    <div className="custom-container">
      <div className="row">
        <div className="col-8 custom-col-8">
          {images.map((item, idx) => {
            return (
              <div className="row" key={idx}>
                <div className="col-8">
                  <h4>{item.title}</h4>
                </div>
                <div className="col-4">
                  <img src={item.url} alt="" className="custom-image" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 custom-col-4">
          <h5>Explore and Uncover Your Passionate Pursuits</h5>
          <p>
            Set forth on a thrilling expedition to unravel the mysteries of the
            world, uncovering the treasures that resonate with your deepest
            passions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
