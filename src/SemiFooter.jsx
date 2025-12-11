const SemiFooter = () => {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 px-2">
        <div>
          <div className="font-bold text-2xl text-[#3A643B] font-serif my-2">
            Download Amrutam Ayurveda App Now
          </div>
          <div className="text-black my-2">
            The Amrutam Ayurveda App is your one-stop app for all things
            Ayurveda! Apart from mimicking the website, the app has added
            benefits
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="card  card-xs shadow-sm bg-[#FFF7E2]">
              <div className="card-body">
                <h2 className="card-title">Xsmall Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
            <div className="card   card-xs shadow-sm bg-[#FFF7E2]">
              <div className="card-body">
                <h2 className="card-title">Xsmall Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
            <div className="card  card-xs shadow-sm bg-[#FFF7E2]">
              <div className="card-body">
                <h2 className="card-title">Xsmall Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
            <div className="card   card-xs shadow-sm bg-[#FFF7E2]">
              <div className="card-body">
                <h2 className="card-title">Xsmall Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
          <div className="my-3"><img src="../src/assets/sm.png" alt="social media" /></div>
        </div>

        <div>
          <div className="flex justify-center gap-3 items-center">
            <div>
              <img src="../src/assets/ETime.png" alt="time" />
            </div>
            <div>
              <img src="../src/assets/iphone.png" alt="iphone" />
            </div>
          </div>
          <div className="my-2">
            <div ><img src="../src/assets/Downloads (2).png" alt="download" className="mx-auto" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiFooter;
