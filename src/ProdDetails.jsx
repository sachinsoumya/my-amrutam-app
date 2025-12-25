import React from "react";
import {Link} from 'react-router-dom';

const ProdDetails = () => {
  const data = [
    {
      image: "../src/assets/p1.jpg",
      name: "Amrutam Kuntal Care Hair Spa | Do-It-Yourself Hair Treatment",
      description:
        "Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj. These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!It's time to bring spa home and unwind.",
      price: 699,
      amount: "200ml",
      hightlights: [
        "Helps with Dry, Frizzy Hair",
        "Relaxes the scalp, improves hair health",
        "Makes the hair smooth and shiny",
        "Reduces hairfall, repairs damaged hair",
      ],

      ingridients: [
        {
          name: "Shatavar",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Aswagandha",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Haldi",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Amla",
          desc: "Naturally enhances brain and relieves pain",
        },
      ],

      usage:
        "Mix one or tow tablespoons of Herbal Child Care Malt with milk or 100-200ml warm water and then consume twice a day or consult our Ayurvedic Expert to find the right Ayurvedic recipe for you.",
      instructions:
        "Store in a cool and dry palce away from direct sunlight. Not advisable for diabetic patients",
      qna: [
        {
          question:
            "Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care",
          answer:
            "This product is ideal for growing babies and kids to nurture their health in a holistic manner",
        },
        {
          question:
            "Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care",
          answer:
            "Amrutam's Child Care Malt helps improve immunity and is useful in enhancing vitality and vigor in children.This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.Giving your little one Amrutam's Child Care Malt daily will help them Improve their appetite and digestion.It is useful in treating anemia, general debility and maintaining a healthy weight.100% Natural and AyurvedicPETA certified cruelty-freeHand-picked and ethically sourced ingredientsAYUSH certified and US FDA approved",
        },
      ],

      ratings: 5.0,
      reviews: 20,
      comments: [
        {
          name: "Sabarinath J",
          date: "20 January 2023",
          content:
            "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
          ratings: 5,
        },
        {
          name: "Sabarinath J",
          date: "20 January 2023",
          content:
            "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
          ratings: 5,
        },
      ],
    },

    {
      image: "../src/assets/p2.jpg",
      name: "Amrutam Kuntal Care Hair Spa | Do-It-Yourself Hair Treatment",
      description:
        "Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj. These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!It's time to bring spa home and unwind.",
      price: 699,
      amount: "200ml",
      hightlights: [
        "Helps with Dry, Frizzy Hair",
        "Relaxes the scalp, improves hair health",
        "Makes the hair smooth and shiny",
        "Reduces hairfall, repairs damaged hair",
      ],

      ingridients: [
        {
          name: "Shatavar",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Aswagandha",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Haldi",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Amla",
          desc: "Naturally enhances brain and relieves pain",
        },
      ],

      usage:
        "Mix one or tow tablespoons of Herbal Child Care Malt with milk or 100-200ml warm water and then consume twice a day or consult our Ayurvedic Expert to find the right Ayurvedic recipe for you.",
      instructions:
        "Store in a cool and dry palce away from direct sunlight. Not advisable for diabetic patients",
      qna: [
        {
          question:
            "Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care",
          answer:
            "This product is ideal for growing babies and kids to nurture their health in a holistic manner",
        },
        {
          question:
            "Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care",
          answer:
            "Amrutam's Child Care Malt helps improve immunity and is useful in enhancing vitality and vigor in children.This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.Giving your little one Amrutam's Child Care Malt daily will help them Improve their appetite and digestion.It is useful in treating anemia, general debility and maintaining a healthy weight.100% Natural and AyurvedicPETA certified cruelty-freeHand-picked and ethically sourced ingredientsAYUSH certified and US FDA approved",
        },
      ],

      ratings: 5.0,
      reviews: 20,
      comments: [
        {
          name: "Sabarinath J",
          data: "20 January 2023",
          content:
            "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
          ratings: 5,
        },
        {
          name: "Sabarinath J",
          data: "20 January 2023",
          content:
            "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
          ratings: 5,
        },
      ],
    },
    {
      image: "../src/assets/p3.jpg",
      name: "Amrutam Kuntal Care Hair Spa | Do-It-Yourself Hair Treatment",
      description:
        "Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj. These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!It's time to bring spa home and unwind.",
      price: 699,
      amount: "200ml",
      hightlights: [
        "Helps with Dry, Frizzy Hair",
        "Relaxes the scalp, improves hair health",
        "Makes the hair smooth and shiny",
        "Reduces hairfall, repairs damaged hair",
      ],

      ingridients: [
        {
          name: "Shatavar",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Aswagandha",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Haldi",
          desc: "Naturally enhances brain and relieves pain",
        },
        {
          name: "Amla",
          desc: "Naturally enhances brain and relieves pain",
        },
      ],

      usage:
        "Mix one or tow tablespoons of Herbal Child Care Malt with milk or 100-200ml warm water and then consume twice a day or consult our Ayurvedic Expert to find the right Ayurvedic recipe for you.",
      instructions:
        "Store in a cool and dry palce away from direct sunlight. Not advisable for diabetic patients",
      qna: [
        {
          question:
            "Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care",
          answer:
            "This product is ideal for growing babies and kids to nurture their health in a holistic manner",
        },
        {
          question:
            "Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care",
          answer:
            "Amrutam's Child Care Malt helps improve immunity and is useful in enhancing vitality and vigor in children.This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.Giving your little one Amrutam's Child Care Malt daily will help them Improve their appetite and digestion.It is useful in treating anemia, general debility and maintaining a healthy weight.100% Natural and AyurvedicPETA certified cruelty-freeHand-picked and ethically sourced ingredientsAYUSH certified and US FDA approved",
        },
      ],

      ratings: 5.0,
      reviews: 20,
      comments: [
        {
          name: "Sabarinath J",
          data: "20 January 2023",
          content:
            "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
          ratings: 5,
        },
        {
          name: "Sabarinath J",
          data: "20 January 2023",
          content:
            "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
          ratings: 5,
        },
      ],
    },
  ];
  return (
    data && (
      <div className="px-2 ">
        <div className="grid  grid-cols-1 lg:grid-cols-3  ">
          <div>
            <img
              src={data[0].image}
              alt="prodimage"
              className="w-full lg:w-full"
            />
          </div>

          <div className="lg:col-span-2 px-5">
            <div className="font-bold text-2xl">{data[0].name}</div>
            <div className="text-xl font-semibold mt-4">
              ₹ {data[0].price} / {data[0].amount}
            </div>
            <div className="flex w-full my-6 gap-2">
              <button className="btn btn-neutral text-black  text-3xl  bg-transparent w-1/2 flex justify-between"><div>-</div><div>+</div></button>
              <button className="btn btn-active btn-success w-1/2">
                Add to Cart
              </button>
            </div>
            <div>
              <div className="text-justify">{data[0].description}</div>
            </div>
            <div>
              <div className="text-xl font-semibold my-6">
                Product Highlights
              </div>

              <div className="grid   grid-cols-1 lg:grid-cols-2 gap-2">
                {data[0].ingridients.map((item) => (
                  <Link to="/ingredients">
                    {" "}
                    <div className="card shadow-sm bg-[#FDEAD2]">
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.desc}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-xl font-semibold my-6">How to use</div>
              <div className="card bg-[#FDEAD2] shadow-sm">
                <div className="card-body">
                  <p>{data[0].usage}</p>
                </div>
              </div>

              <div className="text-xl font-semibold my-6">
                General Instructions
              </div>
              <div className="card bg-[#FDEAD2]  shadow-sm">
                <div className="card-body">
                  <p>{data[0].instructions}</p>
                </div>
              </div>

              <div className="text-xl font-semibold my-6">
                Commonly asked questions
              </div>
              {data[0].qna.map((item) => (
                <div className="card bg-[#FDEAD2]  shadow-sm my-2">
                  <div className="card-body">
                    <div className="font-medium">{item.question}</div>

                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="text-center font-semibold text-xl my-3">
            Reviews and Ratings
          </div>
          <div className="flex justify-around my-4">
            <div className="card bg-[#FDEAD2]  shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{data[0].ratings}</h2>
                <p>based on {data[0].reviews} reviews</p>
              </div>
            </div>

            <div>
              <button className="btn btn-soft bg-[#FFF7E2] mx-2 text-success">
                Default
              </button>
              <button className="btn btn-soft bg-[#FFF7E2] text-success">
                Default
              </button>
            </div>
          </div>
        </div>
        {data[0].comments.map((item) => (
          <div className="card bg-[#FDEAD2] shadow-sm my-2">
            <div className="card-body">
              <p>{item.content}</p>
              <div className="flex gap-6">
                <div>{item.name}</div>
                <div>{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default ProdDetails;
