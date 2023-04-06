import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  // this also works with react-router-native

  const Button = withRouter(({ history }) => (
    <div>
      <button
        type="button"
        onClick={() => {
          if (
            name === localStorage.getItem("name") &&
            pwd === localStorage.getItem("pwd")
          ) {
            console.log("authenticated");
            history.push("/profile");

            // return <Link to="/signup"></Link>;
          } else {
            console.log("Password incorrect");
            window.alert("Incorrect Password");
          }
        }}
      >
        Login
      </button>
    </div>
  ));

  return (
    <div>
      <form>
        <div className="login-form">
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
          <Button />
        </div>
      </form>
    </div>
  );
};
export default Login;

// const Projects = () => {
//   return (
//     <div class="row">
//       <div class="col-sm-6">
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">JavaScript Project</h5>
//             <p class="card-text">
//               With supporting text below as a natural lead-in to additional
//               content.With supporting text below as a natural lead-in to
//               additional content.With supporting text below as a natural lead-in
//               to additional content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       </div>
//       <div class="col-sm-6">
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">React Project</h5>
//             <p class="card-text">
//               With supporting text below as a natural lead-in to additional
//               content.With supporting text below as a natural lead-in to
//               additional content.With supporting text below as a natural lead-in
//               to additional content.
//             </p>
//             <a href="#" class="btn btn-primary">
//               Github link
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// // const Projects = ({ project, name }) => {
// //   return (
// //     <div className="project-list">
// //       {project.map((proj) => (
// //         <div className="project-preview" key={proj.id}>
// //           <h2>{proj.domain}</h2>
// //           <p>{proj.name}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Projects;
