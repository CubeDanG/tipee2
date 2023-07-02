function test() {
  setTimeout(() => console.log("1"), 0);
  console.log("2");
  console.log("3");
}

test();

const getAPI = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((response) => response.json());

  console.log(response);
  console.log(response.title);
};

getAPI();
