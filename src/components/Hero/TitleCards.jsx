/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function TitleCards({ titleHeading, category }) {
  const cardsRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  // const [category, setCategory] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzhkM2I4YTc2YjVmNTUyY2ZjNzVmNWU5ZWIyNDcwNCIsIm5iZiI6MTcyNzE5NTM3Ni4zMDU1MzgsInN1YiI6IjY2ZjJlN2M2YzIzNzI1OGU0YzI3MDQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gryszsmys9CzVEsVA0ACnvFcKk4EECOIDFB_aorrhuA",
    },
  };

  function handleWheel(e) {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    // =========================
    //  Api
    // =========================

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    const cardList = cardsRef.current;
    if (cardList) {
      cardList.addEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <div className=" title-cards  pt-24 ml-44 relative flex flex-col gap-10 ">
      <h3 className="text-4xl font-[600]">{titleHeading}</h3>

      <div
        ref={cardsRef}
        className=" card-list  relative  flex gap-10 overflow-scroll"
      >
        {apiData.map((card) => {
          return (
            <div className="card relative" key={card.id}>
              <Link to={`player/${card.id} `}>
                <div className="img-container relative  ">
                  <img
                    className="  max-w-[300px]"
                    src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
                    alt={card.original_title}
                  />
                </div>
                <p className="text-2xl font-semibold absolute bottom-5 right-7 sub-heading ">
                  {card.original_title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
