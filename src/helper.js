export const getApi = async (url) => {
  const res = await fetch(url).then((result) => result.json());
  return res;
};

export const STATENAMES = {
  AN: {
    name: "Andaman & Nicobar",
    latitude: 11.66702557,
    longitude: 92.73598262,
  },
  AP: { name: "Andhra Pradesh", latitude: 14.7504291, longitude: 78.57002559 },
  AR: {
    name: "Arunachal Pradesh",
    latitude: 27.10039878,
    longitude: 93.61660071,
  },
  AS: { name: "Assam", latitude: 26.244156, longitude: 92.537842 },
  BR: { name: "Bihar", latitude: 25.78541445, longitude: 87.4799727 },
  CH: { name: "Chandigarh", latitude: 30.71999697, longitude: 76.78000565 },
  CT: { name: "Chhattisgarh", latitude: 21.295132, longitude: 81.828232 },
  DL: { name: "Delhi", latitude: 28.6699929, longitude: 77.23000403 },
  DN: { name: "Daman & Diu", latitude: 20.25, longitude: 72.53 },
  GA: { name: "Goa", latitude: 15.491997, longitude: 73.81800065 },
  GJ: { name: "Gujrat", latitude: 22.309425, longitude: 72.13623 },
  HP: { name: "Himachal Pradesh", latitude: 32.084206, longitude: 77.571167 },
  HR: { name: "Haryana", latitude: 29.238478, longitude: 76.431885 },
  JH: { name: "Jharkhand", latitude: 23.80039349, longitude: 86.41998572 },
  JK: {
    name: "Jammu and Kashmir",
    latitude: 34.29995933,
    longitude: 74.46665849,
  },
  KA: { name: "Karnataka", latitude: 15.317277, longitude: 75.71389 },
  KL: { name: "Kerala", latitude: 10.850516, longitude: 76.27108 },
  LA: { name: "Ladakh", latitude: 34.2035819, longitude: 77.6649914 },
  LD: { name: "Lakshadweep", latitude: 10.56257331, longitude: 72.63686717 },
  MH: { name: "Maharastra", latitude: 19.601194, longitude: 75.552979 },
  ML: { name: "Meghalaya", latitude: 25.57049217, longitude: 91.8800142 },
  MN: { name: "Manipur", latitude: 24.79997072, longitude: 93.95001705 },
  MP: { name: "Madhya Pradesh", latitude: 23.473324, longitude: 77.947998 },
  MZ: { name: "Mizoram", latitude: 23.71039899, longitude: 92.72001461 },
  NL: { name: "Nagaland", latitude: 25.6669979, longitude: 94.11657019 },
  OR: { name: "Orrisa", latitude: 20.94092, longitude: 84.803467 },
  PB: { name: "Punjab", latitude: 31.51997398, longitude: 75.98000281 },
  PY: { name: "Puducherry", latitude: 11.93499371, longitude: 79.83000037 },
  RJ: { name: "Rajasthan", latitude: 27.391277, longitude: 73.432617 },
  SK: { name: "Skkim", latitude: 27.3333303, longitude: 88.6166475 },
  TG: { name: "Telangana", latitude: 17.123184, longitude: 79.208824 },
  TN: { name: "Tamil Nadu", latitude: 11.059821, longitude: 78.387451 },
  TR: { name: "Tripura", latitude: 23.745127, longitude: 91.746826 },
  TT: { name: "Total", latitude: null, longitude: null },
  UP: { name: "Uttar Pradesh", latitude: 28.207609, longitude: 79.82666 },
  UT: { name: "Uttarakhand", latitude: 30.32040895, longitude: 78.05000565 },
  WB: { name: "West Bengal", latitude: 22.978624, longitude: 87.747803 },
};

export const TransformToStateArrayFromObject = (obj) => {
  return obj
    ? Object.keys(obj).map((item, idx) => {
        return {
          ...obj[item],
          stateName: STATENAMES[item].name,
          latitude: STATENAMES[item].latitude,
          longitude: STATENAMES[item].longitude,
          stateCode: item,
          id: idx,
        };
      })
    : [];
};

export const TransformToDistrictArrayFromObject = (obj) => {
  return obj
    ? Object.keys(obj).map((item) => {
        return {
          ...obj[item],
          districtName: item,
        };
      })
    : [];
};

export const TransformToDatesArrayFromObject = (obj) => {
  return obj
    ? Object.keys(obj).map((item) => {
        return {
          ...obj[item],
          date: item,
        };
      })
    : [];
};

export const CASES_TYPE_COLOR = {
  confirmed: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 80,
  },
  recovered: {
    hex: "#84d121",
    rgb: "rgb(132, 209, 33)",
    multiplier: 50,
  },
  deceased: {
    hex: "#1c1e1a",
    rgb: "rgb(28, 30, 26)",
    multiplier: 8,
  },
  vaccinated1: {
    hex: "#742cb7",
    rgb: "rgb(116, 44, 183)",
    multiplier: 350,
  },
  vaccinated2: {
    hex: "#a533af",
    rgb: "rgb(165, 51, 175)",
    multiplier: 350,
  },
};
