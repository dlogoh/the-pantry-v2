// import axios from "axios";
// import { registerFail, registerSuccess } from "./authSlice";
// import { useDispatch } from "react-redux";

// export const Tester = async ({ name, email, password }) => {
//   const dispatch = useDispatch();
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ name, email, password });

//   try {
//     const res = await axios.post("/api/users", body, config);

//     console.log("Hello??");

//     dispatch(
//       registerSuccess({
//         payload: res.data,
//       })
//     );
//   } catch (error) {
//     dispatch(registerFail());
//     console.log("ERROR???");
//   }
// };
