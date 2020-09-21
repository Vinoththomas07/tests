export const fetchData = async () => {
  var myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", "56b87c16-a152-4301-883f-cfed2754468f");
  myHeaders.append(
    "Cookie",
    "__cfduid=df1aafc94ffc884687dea8774673521c21600539317"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  var data = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=INR&start=1&limit=100",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return data;
};
