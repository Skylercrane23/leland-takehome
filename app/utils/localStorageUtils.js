export const saveUrlMappings = (mappings) => {
  if (typeof window !== "undefined") {
    const mappingsString = JSON.stringify(mappings);
    localStorage.setItem("urlMappings", mappingsString);
  }
};

export const getUrlMappings = () => {
  if (typeof window !== "undefined") {
    const mappingsString = localStorage.getItem("urlMappings");
    return mappingsString ? JSON.parse(mappingsString) : {};
  }
  return {};
};
