let residentsBtn = document.querySelector("button");
let residentsList = document.getElementById("residents-section");

const getData = () => {
  console.log("Now you'll modify the function to make an axios call to Swapi");

  let baseURL = "https://swapi.dev/api/planets/?search=Alderaan";
  axios.get(baseURL).then((response) => {
    let result = response.data.results[0];
    // console.log(result);

    let resultResidents = result["residents"];
    // console.log(resultResidents);

    for (let i = 0; i < resultResidents.length; i++) {
      axios.get(resultResidents[i]).then((response) => {
        let person = response.data;
        let item = document.createElement("h2");
        item.textContent = person["name"];
        residentsList.appendChild(item);
      });
    }
  });
};

residentsBtn.addEventListener("click", getData);
