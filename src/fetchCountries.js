const BASE_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages,',
});

export const fetchCountries = countryName =>
  fetch(`${BASE_URL}${countryName}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }

      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
