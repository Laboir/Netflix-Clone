/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Player() {
  const [apiData, setApiData] = useState({
    key: "",
    name: "",
    published_at: "",
    type: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzhkM2I4YTc2YjVmNTUyY2ZjNzVmNWU5ZWIyNDcwNCIsIm5iZiI6MTcyNzM3MTM3NC4zNjc4NTgsInN1YiI6IjY2ZjJlN2M2YzIzNzI1OGU0YzI3MDQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLveBkFoRtZB_dYg8nfEKR_OxzpWcSQa9P55qN2u8do",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="h-screen flex flex-col w-full items-center py-5 relative">
      <div className="  back-button-container  absolute left-10 top-10 cursor-pointer">
        <Link to="/">
          <img className="  w-20" src={back_arrow_icon} alt="" />
        </Link>
      </div>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key} `}
        title="aaj ki raat"
        allowFullScreen
      ></iframe>
      <div className="player-info flex justify-between w-[90%]  pt-10">
        <p className="text-2xl">{apiData.published_at.slice(0, 10)}</p>
        <p className="text-2xl">{apiData.name}</p>
        <p className="text-2xl">{apiData.type}</p>
      </div>
    </div>
  );
}
