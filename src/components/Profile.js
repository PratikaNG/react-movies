import React from "react";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    // Using Axios - ensure you first install the package
    await axios
      .post("https://hoblist.com/api/movieList", {
        // Add parameters here
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setData(response.data.result);

        data.map((item) => {
          item.releasedDate = new Date(item.releasedDate);

          item.releasedDate = item.releasedDate.getDate();
        });
        console.log(data);
        // Handle data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();

    // console.log(data);
  }, []);

  return (
    <div>
      <div>
        {data.length > 1 &&
          data.map((item, index) => (
            <div className="card" key={index}>
              <div className="flex-box">
                <div className="movie-votes">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-caret-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                  </p>
                  <p>1</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </p>
                  <p>Votes</p>
                </div>

                <div className="movie-poster">
                  <img src={item.poster} />
                </div>

                <div className="movie-details">
                  <h4>{item.title}</h4>
                  <p>
                    <span>Genre: </span>
                    {item.genre}
                  </p>
                  <p>
                    <span>Director: </span>
                    {item.director}
                  </p>
                  <p>
                    <span>Starring: </span>
                    {item.stars}
                  </p>
                  <p>
                    Mins | {item.language} | {item.releasedDate}
                  </p>
                  <p>
                    <span className="views">
                      {item.pageViews} views | Voted by {item.voting} People
                    </span>
                  </p>
                </div>
              </div>
              <div className="watch-trailer">
                <button>Watch Trailer</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
