import axios from "axios";
export function getImagesByQuery(query) {
return axios.get("https://pixabay.com/api/", {
    params: {
      key: "55647449-f4e56103f1aaaeb422f0623cd",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => response.data);
}