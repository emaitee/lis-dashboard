// import store from '../store';
//
let localEndpoint = "http://localhost:8080/api";
//let remoteEndpoint = "https://pscprime.com/test/LIS_server/api";
//let remoteEndpoint = "https://land-information-system.herokuapp.com/api";

export const apiURL = localEndpoint;

const _postApi = (url, data = [], success = (f) => f, error = (f) => f) => {
  // const { facilityId } = store.getState().auth.user;
  // data.facilityId = facilityId;
  fetch(apiURL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      if (response.status >= 400) {
        error();
      } else sucresponsecess(response);
    })
    .catch((err) => {
      error(err);
      console.error(err);
    });
};

const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  // const { facilityId } = store.getState().auth.user;
  // let actualURL = `${url}/${facilityId}`;

  fetch(url)
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      error(err);
    });
};
export { _postApi, _fetchApi };
