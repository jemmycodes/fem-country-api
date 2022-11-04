"use strict";

const container = document.getElementById("country-container");

const getApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  renderCountry(data);
};

const renderCountry = (data) => {
  data.forEach((country) => {
    const html = `<figure class="w-[15rem]">
        <img src="${country.flags.png}" alt="" class="rounded-t-md w-32 h-28" />
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

getApi(`https://restcountries.com/v3.1/all`);
