import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Replies from "./Replies";

const QnA = () => {
  const [qna, setQna] = useState([]);
  const [showReplies , setShowReplies] = useState("");

  const getData = () => {

    const data = [
      {
        id: 1,
        name: "Anonymous",
        image: " ../src/assets/logo.png",
        question:
          " Question: Can Ayurveda help with stress and mental health issues? ",
        answer:
          "Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.",
        replies: [
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
        ],
      },

      {
        id: 1,
        name: "Anonymous",
        image: " ../src/assets/logo.png",
        question:
          " Question: Can Ayurveda help with stress and mental health issues? ",
        answer:
          "Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.",
        replies: [
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
        ],
      },

      {
        id: 1,
        name: "Anonymous",
        image: " ../src/assets/logo.png",
        question:
          " Question: Can Ayurveda help with stress and mental health issues? ",
        answer:
          "Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.",
        replies: [
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
          {
            name: "Dr. Mathew Adams",
            image: "../src/assets/doctor.png ",
            reply:
              "Ans. Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
            likes: 2,
          },
        ],
      },
    ];

    setQna(data);
    // setShowReplies(data ?.data.replies[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    qna && (
      <div>
        <div className="flex  w-full justify-between p-3">
          <div className="flex gap-2 ">
            <img src="../src/assets/User.png" alt="profile-image" />
            <div className="self-center hidden lg:block ">Any one</div>
          </div>

          <div>
            <button className="btn btn-success">Ask Questions</button>
          </div>
        </div>

        <hr />

        <div className="p-2 ">
          {qna.map((item) => (
            <div className=" p-2">
              <div className="flex gap-2">
                <img src={item.image} alt="image" />
                <div className="self-center">{item.name}</div>
              </div>

              <div className="py-2">
                <div className="font-semibold py-2">{item.question}</div>

                <div className="py-2">{item.answer}</div>
              </div>

              

              <div className="flex justify-end ">
                <div className="w-3/4">
                 <Replies  replies={item.replies}/>
                 
                </div>
              </div>

              <hr />
            </div> 
          ))}
        </div>
      </div>
    )
  );
};

export default QnA;
