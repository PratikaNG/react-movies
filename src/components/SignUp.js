import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [mail, setMail] = useState("");
  const [contact, setContact] = useState("");
  const [profession, setProfession] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("pwd", pwd);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Fullname"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={pwd}
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            value={mail}
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="contact"
            value={contact}
            placeholder="Contact"
            maxLength="10"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <select
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          >
            <option>Teacher</option>
            <option>Business Man</option>
            <option>Lawyer</option>
          </select>
        </div>
        <div>
          <button
            onClick={(e) => {
              handleSignUp(e);
            }}
          >
            <Link to="/login">SignUp</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";

// const HomePage = () => {
//   const [likes, setLikes] = useState(0);

//   const handleOnClick = () => {
//     setLikes(likes + 1);
//   };
//   return (
//     <div className="home">
//       <h2>HomePage</h2>
//       <p>This profile has been liked by {likes} people</p>

//       <button
//         type="button"
//         class="btn btn-info"
//         onClick={() => handleOnClick()}
//       >
//         Like
//       </button>
//     </div>
//   );
// };

// export default HomePage;
