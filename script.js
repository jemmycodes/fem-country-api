"use strict";

const container = document.getElementById("country-container");
const select = document.getElementById("select-btn");
const search = document.getElementById("search-box");

const getApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((country) => {
    renderCountry(country);
  });
  return data;
};

const renderCountry = (data) => {
  const html = `<figure class="w-[15rem]">
        <img src="${data.flags.png}" alt="" class="rounded-t-md w-full h-32" />
        <hgroup class="bg-DarkModeTextLightModeElements rounded-b-md p-5">
          <p class="font-extrabold pb-4">${data.name.common}</p>
          <p>
            Population: <span>${data.population}</span>
          </p>
          <p>
            Region: <span>${data.region}</span>
          </p>
          <p>
            Capital: <span>${data.capital[0]}</span>
          </p>
        </hgroup>
      </figure>`;
  container.insertAdjacentHTML("beforeend", html);
};

const chooseRegion = async () => {
  container.replaceChildren();
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${select.value}`
  );
  const data = await response.json();
  data.forEach((country) => {
    renderCountry(country);
  });
};

const renderSearch = async () => {
  container.replaceChildren();
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${search.value}?fullText=true`
  );
  const data = await response.json();
  const [country] = data;

  renderCountry(country);
};

search.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    renderSearch();
  }
});

select.addEventListener("change", chooseRegion);

getApi(`https://restcountries.com/v3.1/all`);
