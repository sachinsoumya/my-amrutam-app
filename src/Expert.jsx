import { useEffect, useState } from "react";
import ExpertCard from "./ExpertCard";
import { Slider } from "./Slider";

const Expert = () => {
  const [experts, setExperts] = useState("");

  const getData = () => {
    const data = [
      {
        name: "Dr. Vaishali sharma",
        image: "/src/assets/Expert.png",
        about: " Ayurveda Practitioner(BAMS,MD)",
        specialization: "Skin",
        experience: "25 years",
        Ratings: 4.5,
      },
      {
        name: "Dr. Vaishali sharma",
        image: "/src/assets/Expert.png",
        about: " Ayurveda Practitioner(BAMS,MD)",
        specialization: "Skin",
        experience: "25 years",
        Ratings: 4.5,
      },
      {
        name: "Dr. Vaishali sharma",
        image: "/src/assets/Expert.png",
        about: " Ayurveda Practitioner(BAMS,MD)",
        specialization: "Skin",
        experience: "25 years",
        Ratings: 4.5,
      },
      {
        name: "Dr. Vaishali sharma",
        image: "/src/assets/Expert.png",
        about: " Ayurveda Practitioner(BAMS,MD)",
        specialization: "Skin",
        experience: "25 years",
        Ratings: 4.5,
      },
      {
        name: "Dr. Vaishali sharma",
        image: "/src/assets/Expert.png",
        about: " Ayurveda Practitioner(BAMS,MD)",
        specialization: "Skin",
        experience: "25 years",
        Ratings: 4.5,
      },
      {
        name: "Dr. Vaishali sharma",
        image: "/src/assets/Expert.png",
        about: " Ayurveda Practitioner(BAMS,MD)",
        specialization: "Skin",
        experience: "25 years",
        Ratings: 4.5,
      }
    ];

    data && setExperts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    experts && (
      <div className="bg-white py-5">
        <div className="text-center py-10 font-bold">Meet our  Experts</div>
        {/* <div class= " flex justify-center gap-4 flex-wrap">
          {experts.map((item) => (
            <ExpertCard data={item} />
           
          ))}
        </div> */}
        <Slider data={experts} />
      </div>
    )
  );
};

export default Expert;
