import qs from "qs";
import axios from "axios";
const CLIENT_ID = "55b6c15b16aed4c";

const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(image => {
      const form = new FormData();
      form.append("image", image);
      return axios.post(`${ROOT_URL}/3/upload`, form, {
        headers: {
          Authorization: `Client-ID ${token}`
        }
      });
    });
    return Promise.all(promises);
  }
};
