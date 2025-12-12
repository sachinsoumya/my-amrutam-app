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
          },
          {
            id: 2,
            text: "Reduces cholesterol and supports weight loss.",
          },
          {
            id: 3,
            text: "Manages diabetes by lowering blood sugar levels.",
          },
          {
            id: 4,
            text: "Beneficial in Hemorrhoids of Vata origin.",
          },
          {
            id: 5,
            text: "Improves digestion and boosts metabolism.",
          },
          {
            id: 6,
            text: "Prevents deposits in arteries, supporting heart health.",
          },
          {
            id: 7,
            text: "Treats skin conditions like acne and dermatitis.",
          },
          {
            id: 6,
            text: "Speeds up wound healing and promotes new skin growth.",
          },
        ],
        properties: [
          {
            id: 1,
            text: " Rasa Katu (Pungent) Stimulates salivation and digestion",
          },
          {
            id: 2,
            text: " Veerya Ushna (Hot). Increases heat and energy in the body",
          },
          {
            id: 3,
            text: " Guna Laghu (Light) , Ruksha (Dry), Tiksna (Sharp) Easy to digest, reduces heaviness",
          },
          {
            id: 4,
            text: "Vipaka  Katu (Pungent) Drying and stimulating even after digestion",
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
          },
          {
            id: 2,
            text: "Pitta",
            amount: "Balanced",
          },
          {
            id: 3,
            text: "Kapha",
            amount: "Unbalanced",
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
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
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
              <div>
                {data[0].impact.map((item) => (
                  <div
                    className={`radial-progress ${
                      item.amount === "Unbalanced" && "text-error"
                    }  mx-2`}
                    style={{
                      "--value": `${item.amount === "Unbalanced" ? 70 : 50}`,
                    }}
                    aria-valuenow={`${item.amount === "Unbalanced" ? 70 : 50}`}
                    role="progressbar"
                  >
                    {`${item.amount === "Unbalanced" ? "70%" : "50%"}`}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default InDetails;
