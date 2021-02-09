import {
  LOADING_SIGNUP,
  SET_USER,
  LOADING_LOGIN,
  SET_AUTH_ERROR,
  LOGOUT,
  STOP_LOADING_APP,
  ERRORMESSAGE,
} from "./type";
import { apiURL } from "./api";
// import { useHistory } from 'react-router-dom';
export function signup(objs = {}, success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: LOADING_SIGNUP });
    fetch(`${apiURL}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objs),
    })
      .then((raw) => raw.json())
      .then((data) => {
        dispatch({ type: LOADING_SIGNUP });
        if (data.success) {
          dispatch(
            login(
              objs.email,
              objs.password,
              (data) => {
                success(data);
                const { user, token } = data;
                dispatch({ type: SET_USER, payload: user });
                if (token) {
                  localStorage.setItem("@@bits_lis", JSON.stringify(token));
                }
              },
              (err) => {
                error(err);
                dispatch({ type: SET_AUTH_ERROR, payload: err });
              }
            )
          );
        } else {
          let msg = Object.values(data)[0];
          error(msg);
          dispatch({ type: SET_AUTH_ERROR, payload: msg });
        }
      })
      .catch((error) => {
        dispatch({ type: LOADING_SIGNUP });
        // console.log(error)
      });
  };
}

export function login(email, password, success, error) {
  return (dispatch) => {
    console.log("SUBMITTED", { email, password });
    dispatch({ type: LOADING_LOGIN });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    fetch(`${apiURL}/users/login`, requestOptions)
      .then((raw) => raw.json())
      .then((data) => {
        // console.log(data);
        dispatch({ type: LOADING_LOGIN });
        if (data.success) {
          const { token } = data;
          getUserProfile(token)
            .then((data) => {
              if (data.success) {
                /**
                 * Token is valid
                 * navigate user to dashboard */
                const { user } = data;
                dispatch({ type: SET_USER, payload: user });
                // console.log('got here', user.id);
                if (token) {
                  localStorage.setItem("@@bits_lis", JSON.stringify(token));
                }
                success(data);
              }
            })
            .catch((err) => {
              error();
            });
        } else {
          dispatch({ type: ERRORMESSAGE, payload: data.msg });
          error(data.error);
          console.log(data);
        }
      })
      .catch((err) => {
        dispatch({ type: LOADING_LOGIN });
        // console.log(err)
      });
  };
}

export async function getUserProfile(_token) {
  try {
    // console.log(_token);
    let response = await fetch(`${apiURL}/user/verify`, {
      method: "GET",
      headers: {
        authorization: _token,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
}

export function init(history, callback = (f) => f) {
  return (dispatch) => {
    let token = localStorage.getItem("@@bits_lis") || null;
    // dispatch({ type: START_LOADING_APP });
    if (token) {
      token = JSON.parse(token);
      /**
       * Token present
       * verifyToken */
      getUserProfile(token)
        .then((data) => {
          if (data.success) {
            /**
             * Token is valid
             * navigate user to dashboard */
            callback();
            // dispatch({ type: STOP_LOADING_APP });
            const { user } = data;
            dispatch({ type: SET_USER, payload: user });

            // history.push('/admin/index');
          } else {
            /**
             * Token is invalid
             * navigate user to auth */
            // dispatch({ type: STOP_LOADING_APP });
            callback();
            // console.log(err)
            localStorage.removeItem("@@bits_lis");
            history.push("/auth/login");
            // console.log('Token expired');
          }
        })
        .catch((err) => {
          // server error
          console.log(err);
          dispatch({ type: STOP_LOADING_APP });
        });
    } else {
      /**
       * No token found
       * navigate user to auth page
       */
      callback();
      history.push("/auth/login");
      // dispatch({ type: STOP_LOADING_APP });
    }
  };
}

export function logout(history) {
  return (dispatch) => {
    localStorage.removeItem("@@bits_lis");
    dispatch({ type: LOGOUT });
    history.push("/auth/login");
  };
}
// const accessToDirect = (history, access) => {
//   if (access && access.length) {
//     switch (access[0]) {
//       case 'LAND':
//         history.push('/land');
//         break;
//       case 'CAD':
//         history.push('/cad');
//         break;
//       case 'SURVEY':
//         history.push('/survey');
//         break;
//       case 'DEEDS':
//         history.push('/deeds');
//         break;
//       case 'GIS':
//         history.push('/gis/information');
//         break;
//       case 'SLTR':
//         history.push('/sltr');
//         break;
//       case 'ICT':
//         history.push('/ict');
//         break;
//       case 'DCIV':
//         history.push('/dciv');
//         break;
//       case 'PRS':
//         history.push('/dprs');
//         break;
//       case 'SPECIAL ASSIGNMENT':
//         history.push('/assignment');
//         break;
//       case 'REVENUE':
//         history.push('/revenue');
//         break;
//       case 'LEGAL':
//         history.push('/legal');
//         break;
//       case 'DANGS':
//         history.push('/dangs');
//         break;
//       case 'ADMIN':
//         history.push('/admin');
//         break;
//       default:
//         history.push('/auth/login');
//         break;
//     }
//   }
// };
