import { useEffect, useState } from "react";

const InDetails = () => {
  const [data, setData] = useState("");

  const getData = () => {
    const data = [
      {
        id: 1,
        image: "../src/assets/ingredient.png",
        name: "Citrak - Plumbago zeylancia (Sanskrit - चित्रक)",
        description:
          "Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body. It is great for boosting metabolism, enhancing skin health, and easing joint pain.",
        benefits: [
          {
            id: 1,
            text: "Calms the nervous system and reduces anxiety.",
            textImage: "💆‍♂️",
          },
          {
            id: 2,
            text: "Reduces cholesterol and supports weight loss.",
            textImage: "⛓️",
          },
          {
            id: 3,
            text: "Manages diabetes by lowering blood sugar levels.",
            textImage: "🩸",
          },
          {
            id: 4,
            text: "Beneficial in Hemorrhoids of Vata origin.",
            textImage: "💊",
          },
          {
            id: 5,
            text: "Improves digestion and boosts metabolism.",
            textImage: "🍽️",
          },
          {
            id: 6,
            text: "Prevents deposits in arteries, supporting heart health.",
            textImage: "❤️",
          },
          {
            id: 7,
            text: "Treats skin conditions like acne and dermatitis.",
            textImage: "🌿",
          },
          {
            id: 6,
            text: "Speeds up wound healing and promotes new skin growth.",
            textImage: "🍽️",
          },
        ],
        properties: [
          {
            id: 1,
            text: " Rasa Katu (Pungent) Stimulates salivation and digestion",
            textImage: "../src/assets/katu.png",
          },
          {
            id: 2,
            text: " Veerya Ushna (Hot). Increases heat and energy in the body",
            textImage: "../src/assets/ushna.png",
          },
          {
            id: 3,
            text: " Guna Laghu (Light) , Ruksha (Dry), Tiksna (Sharp) Easy to digest, reduces heaviness",
            textImage: "../src/assets/laghu.png",
          },
          {
            id: 4,
            text: "Vipaka  Katu (Pungent) Drying and stimulating even after digestion",
            textImage: "../src/assets/vipaka.png",
          },
        ],
        reasonToUse: [
          "Chitrak is valued because it helps lower blood sugar, boosts digestion, and reduces anxiety.",
          "It also protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.",
          "It is most used in Ayurvedic medicines for indigestion.",
        ],
        impact: [
          {
            id: 1,
            text: "Vata",
            amount: "Balanced",
            imageText: "🌀",
          },
          {
            id: 2,
            text: "Pitta",
            amount: "Balanced",
            imageText: "🍃",
          },
          {
            id: 3,
            text: "Kapha",
            amount: "Unbalanced",
            imageText: "🔥",
          },
        ],
        formulations: [
          {
            id: 1,
            text: "Chitrak Haritaki",
            textImage: "../src/assets/haritaki.png",
          },
          {
            id: 1,
            text: "Chitrakadi Vati ",
            textImage: "../src/assets/vati.png",
          },
          {
            id: 1,
            text: "Kalyanagulam",
            textImage: "../src/assets/kalyangulam.png",
          },
          {
            id: 1,
            text: "Chitrakadi Churna",
            textImage: "../src/assets/kalyangulam.png",
          },
        ],

        therapeutic: [
          {
            id: 1,
            text: "Agnimandya ",
            textImage: "../src/assets/Agnimandya.png",
          },
          {
            id: 2,
            text: "Grahani Rog",
            textImage: "../src/assets/GrahaniRog.png",
          },

          {
            id: 3,
            text: "Arsha",
            textImage: "../src/assets/Arsha.png",
          },
          {
            id: 4,
            text: "Udara Shula",
            textImage: "../src/assets/Udara.png",
          },
          {
            id: 5,
            text: "Gudasotha",
            textImage: "../src/assets/Gudasotha.png",
          },
        ],

        purposes: [
          {
            id: 1,
            text: "Root",
            textImage: "../src/assets/root.png",
            description:
              "Root Digestion, Skin conditions, manage blood sugar level.",
          },
          {
            id: 1,
            text: "Root bark",
            textImage: "../src/assets/rootbank.png",
            description:
              "Root bark Manage obesity, metabolism and assit in weight loss. ",
          },
          {
            id: 1,
            text: "leaves",
            textImage: "../src/assets/leaves.png",
            description:
              "Leaves Used externally for skin conditions and wounds. ",
          },
        ],

        glocation:
          "It is native to tropical and subtropical regions worldwide, including India and Srilanka.",

        combination: [
          "Pipplai",
          "Haritakai",
          "Guggulu",
          "Punarnava",
          "Amla",
          "Giloy",
        ],

        products: [
          {
            name: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
            price: "699",
            image: "../src/assets/p1.jpg",
          },
          {
            name: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
            price: "699",
            image: "../src/assets/p1.jpg",
          },
          {
            name: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
            price: "699",
            image: "../src/assets/p1.jpg",
          },
        ],
      },
    ];

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    data && (
      <div >
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div>
            <img src={data[0].image} alt="ingredient image" />
          </div>

          <div className="font-[Nunito]">
            <div className="font-bold text-2xl ">{data[0].name}</div>
            <div>
              Chitrak, also known as Ceylon Leadwort or Doctorbush, is a
              powerful Ayurvedic herb valued for its ability to improve
              digestion, reduce inflammation, and detoxify the body. It is great
              for boosting metabolism, enhancing skin health, and easing joint
              pain.
            </div>
            <div>
              <div className="font-semibold text-lg my-2">Why Chitrak ?</div>
              <div>
                <ul className="list-disc px-4">
                  {data[0].reasonToUse.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </div>
              <div className="font-semibold text-lg my-2">Prakruti Impact</div>
              <div className="py-2">
                {data[0].impact.map((item) => (
                  <div
                    className={`radial-progress ${
                      item.amount === "Unbalanced"
                        ? "text-error"
                        : "text-success"
                    }  mx-2`}
                    style={{
                      "--value": `${item.amount === "Unbalanced" ? 70 : 50}`,
                    }}
                    aria-valuenow={`${item.amount === "Unbalanced" ? 70 : 50}`}
                    role="progressbar"
                  >
                    {/* {`${item.amount === "Unbalanced" ? "🔥" : "🌀"}`} */}
                    {item.imageText}
                  </div>
                ))}
              </div>

              <div className="font-semibold text-lg my-2">Benefits</div>
              <div className="grid  grid-cols-1 lg:grid-cols-2 w-full gap-2">
                {data[0].benefits.map((item) => (
                  <div className="card  card-xs shadow-sm bg-[#FFE9CB] ">
                    <div className="card-body">
                      <h2 className="card-title"> {item.textImage} </h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="py-4">
                <div className="font-semibold text-lg my-2">
                  Ayurvedic Properties
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-2 my-4">
                  {data[0].properties.map((item) => (
                    <div className="font-medium text-center">
                      <img src={item.textImage} alt="c" className="mx-auto" />
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <div className="font-semibold text-lg my-2">
                  Important formulations
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-2 my-4">
                  {data[0].formulations.map((item) => (
                    <div className="font-medium text-center">
                      <img src={item.textImage} alt="c" className="mx-auto" />
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <div className="font-semibold text-lg my-2">
                  Therapeutic uses
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-1 my-4">
                  {data[0].therapeutic.map((item) => (
                    <div className="font-medium text-center">
                      <img src={item.textImage} alt="c" className="mx-auto" />
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <div className="font-semibold text-lg my-2">
                  Therapeutic uses
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-1 my-4">
                  {data[0].purposes.map((item) => (
                    <div className="font-medium text-center">
                      <img src={item.textImage} alt="c" className="mx-auto" />
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <div className="font-semibold text-lg my-2">
                  Best combined with
                </div>
                <div className="font-medium ">
                  {data[0].combination.join(",")}
                </div>
              </div>

              <div className="py-4">
                <div className="font-semibold text-lg my-2">
                  Best combined with
                </div>
                <div className="font-medium ">{data[0].glocation}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="font-semibold text-lg my-2">
            Products with "Chitrak" as primary ingredient
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {data[0].products.map((item) => (
              <div>
                <img src={item.image} alt="image" />
                <div className="font-medium">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default InDetails;
