// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import { useDispatch } from "react-redux";
import { apiURL } from "redux/action/api";

const asyncSignupValidate = (values) => {
  //   fetch(apiURL + "users/check-mail", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status >= 400) {
  //         //return response.data;
  //       } else throw response.data;
  //     })
  //     .catch((err) => {
  //       //   return err;
  //     });
  return sleep(1000).then(() => {
    // simulate server latency
    // if (["foo@foo.com", "bar@bar.com"].includes(values.email)) {
    // eslint-disable-next-line no-throw-literal
    throw { email: "Email already Exists" };
    // }
  });
};
export default asyncSignupValidate;
