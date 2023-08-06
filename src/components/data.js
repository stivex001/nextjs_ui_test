export function getData() {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return [];
      });
  }
  