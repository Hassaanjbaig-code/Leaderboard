const postdata = async (url, data) => {
  try {
    const respone = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const get = await respone.json();
    if (!respone.ok) {
      throw Error(respone.statusText);
    }
    return get;
  } catch (error) {
    return error;
  }
};

export default postdata;
