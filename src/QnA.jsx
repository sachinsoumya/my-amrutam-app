import { useState, useEffect } from "react";
import ShowReplies from "./ShowReplies";
import Modal from "./Modal";

const QnA = () => {
  const [qna, setQna] = useState([]);
  // const [showReplies, setShowReplies] = useState("");

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
      <div className="py-2">
        <div className="flex justify-between m-3 gap-1">
          <label className="input w-6/6   border-gray-300 bg-white rounded-full flex gap-2 ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-white border-gray-300 bg-white btn-dash avatar"
            >
              <div className="w-10 rounded-2xl text-center">🟰</div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Recent</a>
                <hr />
              </li>
              <li>
                <a>Most Liked</a>
                <hr />
              </li>
              <li>
                <a>Most Commented</a>
                <hr />
              </li>
              <li>
                <a>Oldest</a>
                <hr />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex  w-full justify-between p-3">
          <div className="flex gap-2 ">
            <img src="../src/assets/User.png" alt="profile-image" />
            <div className="self-center hidden lg:block ">Any one</div>
          </div>

          <div>
            <button
              className="btn btn-success"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Ask Questions
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle "
            >
              <Modal />
            </dialog>
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

              <ShowReplies replies={item.replies} />

              {/* <div className="flex justify-end ">
                <div className="w-3/4">
                 <Replies  replies={item.replies}/>
                 
                </div>
              </div> */}

              <hr />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default QnA;
