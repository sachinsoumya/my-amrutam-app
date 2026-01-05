const ExpertCard = ({ data }) => {
  return (
    <div className="card bg-[#FFF7E2]  shadow-sm px-0 ">
      <figure className="px-10 pt-10">
        <img src={data.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{data.name}</h2>
        <p className="text-[#838383]">{data.about}</p>
        <p className="font-medium">
          <img
            src="../src/assets/Icon.png"
            alt="icon"
            className="inline px-1"
          />
          {data.experience} years of experience
        </p>
        <div className="badge badge-outline badge-success">
          {" "}
          {data.specialization} Specialist
        </div>
        <div className="bg-emerald-700 text-center w-full text-white ">

          Book Demo


        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
