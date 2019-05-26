export const loadTrips = (value = "") => {
  return fetch(`/api/trips?countries_like=${value}`).then(response =>
    response.json()
  );
};

export const loadItem = async ({ value, itemType }) => {
  return fetch(`/api/${itemType}/${value}`).then(res => res.json());
};

const loadItems = (itemsId, itemType) => {
  return Promise.all(
    itemsId[itemType].map(id => loadItem({ value: id, itemType }))
  );
};

export const loadTrip = async id => {
  let data = {
    countries: [],
    cities: [],
    places: []
  };
  let itemsId;
  let currentTrip;

  return loadItem({ value: id, itemType: "trips" })
    .then(trip => {
      currentTrip = trip;
      itemsId = {
        countries: trip.countriesList,
        cities: trip.citiesList,
        places: trip.placesList
      };
      return loadItems(itemsId, "countries");
    })
    .then(countries => {
      data.countries = countries;
      return loadItems(itemsId, "cities");
    })
    .then(cities => {
      data.cities = cities;
      return loadItems(itemsId, "places");
    })
    .then(places => {
      data.places = places;
      return { data, trip: currentTrip };
    });
};

const unloadItem = (data = {}, itemType) => {
  return fetch(`/api/${itemType}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => {
      console.log("Success:", response);
      return response;
    });
};

export const unloadData = (items, trip) => {
  ["countries", "cities", "places"].forEach(itemType => {
    items[itemType].forEach(item => {
      unloadItem(item, itemType);
    });
  });
  return unloadItem(trip, "trips");
};

export const deleteTrip = id => {
  return fetch(`/api/trips/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success", response));
};

const updateItem = (data = {}, itemType) => {
  return fetch(`/api/${itemType}/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => {
      console.log("Success:", response);
      return response;
    });
};

export const updateData = (items, trip) => {
  ["countries", "cities", "places"].forEach(itemType => {
    items[itemType].forEach(item => {
      updateItem(item, itemType);
    });
  });
  return updateItem(trip, "trips");
};

export const loadPoster = value => {
  return fetch(`/api/posters?country_like=${value}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        return {
          url:
            "https://www.sabreakingnews.co.za/wp-content/uploads/2018/05/California.jpg"
        };
      }
      return data[0];
    });
};
