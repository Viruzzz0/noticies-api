import cheerio from "cheerio";

export async function getNoticie(name) {
  const newsName = name.split(" ").join("+");
  console.log("NewsName: ", newsName);

  const url = `https://www.bing.com/news/search?q=${newsName}&qs=n&form=QBNT&sp=-1&lq=0&pq=persona+5&sc=10-9&sk=&cvid=621A2A47EB7247F591B0AFEF91B3692E&ghsh=0&ghacc=0&ghpl=`;

  const customHeaders = {
    "Accept-Language": "es",
  };

  const requestOptions = {
    headers: customHeaders,
    method: "GET",
  };

  const html = await fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const $ = cheerio.load(html);
  const divContent = $("#algocore").find("div.news-card");
  const noticies = [];

  divContent.each((index, element) => {
    const title = $(element).find("a.title").text();
    const content = $(element).find("div.snippet").text();
    const url = $(element).attr("url");
    const imageUrl = $(element)
      .find("div.image")
      .find("img")
      .attr("data-src-hq");

    noticies.push({ title, content, url, imageUrl });
  });

  return noticies;
}
