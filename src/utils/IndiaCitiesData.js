import nanoId from "./RandomIdGen";

const defaultList = () => {
  return;
};

const getAllCitiesDropList = (data) => {
  return data?.allCitiesList?.map((city) => {
    return (
      <option key={nanoId()} value={city}>
        {city}
      </option>
    );
  });
};

const getProvinceDropList = (data) => {
  return data?.provinceList?.map((province) => {
    return (
      <option key={nanoId()} value={province}>
        {province}
      </option>
    );
  });
};

const getMaharashtraCitiesDropList = (data) => {
  return data?.maharashtraCitiesList?.map((city) => {
    return (
      <option key={nanoId()} value={city}>
        {city}
      </option>
    );
  });
};

const getKarnatakaCitiesDropList = (data) => {
  return data?.karnatakaCitiesList?.map((city) => {
    return (
      <option key={nanoId()} value={city}>
        {city}
      </option>
    );
  });
};

const getTamilNaduCitiesDropList = (data) => {
  return data?.tamilNaduCitiesList?.map((city) => {
    return (
      <option key={nanoId()} value={city}>
        {city}
      </option>
    );
  });
};

const getUttarPradeshCitiesDropList = (data) => {
  return data?.uttarPradeshCitiesList?.map((city) => {
    return (
      <option key={nanoId()} value={city}>
        {city}
      </option>
    );
  });
};

const getRajasthanCitiesDropList = (data) => {
  return data?.rajasthanCitiesList?.map((city) => {
    return (
      <option key={nanoId()} value={city}>
        {city}
      </option>
    );
  });
};

const getNorthEastAreasCitiesDropList = (data) => {
  return data?.northEastAreasList?.map((city) => {
    return (
      <option key={nanoId()} value={city}>
        {city}
      </option>
    );
  });
};

const getDelhiSectorsDropList = (data) => {
  return data?.delhiSectorsList?.map((sector) => {
    return (
      <option key={nanoId()} value={sector}>
        {sector}
      </option>
    );
  });
};

export default defaultList;
export {
  getProvinceDropList,
  getDelhiSectorsDropList,
  getNorthEastAreasCitiesDropList,
  getRajasthanCitiesDropList,
  getUttarPradeshCitiesDropList,
  getTamilNaduCitiesDropList,
  getKarnatakaCitiesDropList,
  getMaharashtraCitiesDropList,
  getAllCitiesDropList,
};
