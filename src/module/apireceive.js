const getdata = async (url) => {
  try {
    const respone = await fetch(url);
    if (!respone.ok) {
      throw Error(respone.statusText);
    }
    const data = await respone.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export default getdata;