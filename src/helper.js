export const getApi = async (url) => {
  const res = await fetch(url).then((result) => result.json());

  return res;
};

export const STATENAMES = {
  AN: "Andaman & Nicobar",
  AP: "Andhra Pradesh",
  AR: "Arunachal Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CH: "Chandigarh",
  CT: "Chhattisgarh",
  DL: "Delhi",
  DN: "Daman & Diu",
  GA: "Goa",
  GJ: "Gujrat",
  HP: "Himachal Pradesh",
  HR: "Haryana",
  JH: "Jharkhand",
  JK: "Jammu and Kashmir",
  KA: "Karnataka",
  KL: "Kerala",
  LA: "Ladakh",
  LD: "Lakshadweep",
  MH: "Maharastra",
  ML: "Meghalaya",
  MN: "Manipur",
  MP: "Madhya Pradesh",
  MZ: "Mizoram",
  NL: "Nagaland",
  OR: "Orrisa",
  PB: "Punjab",
  PY: "Puducherry",
  RJ: "Rajasthan",
  SK: "Skkim",
  TG: "Telangana",
  TN: "Tamil Nadu",
  TR: "Tripura",
  TT: "Total",
  UP: "Uttar Pradesh",
  UT: "Uttarakhand",
  WB: "West Bengal",
};

export const TransformToStateArrayFromObject = (obj) => {
  return obj
    ? Object.keys(obj).map((item, idx) => {
        return {
          ...obj[item],
          stateName: STATENAMES[item],
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
