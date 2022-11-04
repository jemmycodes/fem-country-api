"use strict";

const container = document.getElementById("country-container");
const select = document.getElementById("select-btn");

const getApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  renderCountry(data);
  return data;
};

const renderCountry = (data) => {
  data.forEach((country) => {
    const html = `<figure class="w-[15rem]">
        <img src="${country.flags.png}" alt="" class="rounded-t-md w-full h-32" />
        <hgroup class="bg-DarkModeTextLightModeElements rounded-b-md p-5">
          <p class="font-extrabold pb-4">${country.name.common}</p>
          <p>
            Population: <span>${country.population}</span>
          </p>
          <p>
            Region: <span>${country.region}</span>
          </p>
          <p>
            Capital: <span>${country.capital[0]}</span>
          </p>
        </hgroup>
      </figure>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};

const chooseRegion = async () => {
  container.replaceChildren();
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${select.value}`
  );
  const data = await response.json();
  console.log(data);
  renderCountry(data);
};

select.addEventListener("change", chooseRegion);

getApi(`https://restcountries.com/v3.1/all`);
