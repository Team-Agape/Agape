import axios from "axios";

const BACKEND_URL =
  "https://agape-a-default-rtdb.asia-southeast1.firebasedatabase.app";

export function postData(orphanageData) {
  axios.post(BACKEND_URL + "/orphanages.json", orphanageData);
}

export async function getData() {
  const response = await axios.get(BACKEND_URL + "/orphanages.json");

  const orphanages = [];

  console.log("before transforming")
  // console.log(response)

  for (const key in response.data){
    let count = '0'
    const orphanageObj = {
      id: key,
      district: response.data[key].count.district,
      location: response.data[key].location,
      name: response.data[key].name,
      imageUrl: response.data[key].imageUrl,
      itemsNeeded: response.data[key].itemsNeeded
    };
    orphanages.push(orphanageObj)
  }
  console.log("after transforming")
  // console.log(orphanages)
  return orphanages;
}
