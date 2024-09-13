// 100 Days Of Coding Challenge!

/** Question 141: Significance of await in Asynchronous JavaScript
Discuss the significance of the await reserved word in asynchronous JavaScript.*/

//--------------------------------------------------------------------------------

async function fetchData(url: string) {
  try {
    const response = await fetch(url); // 'await' pauses the execution until the promise is resolved
    console.log("Response received:", response);
    const data = await response.json(); // 'await' is used again to wait for the JSON parsing
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Fetch attempt completed.");
  }
}

/* Explanation:
The 'await' keyword is used in asynchronous functions to pause the execution of the function
until the promise is resolved. This makes the code easier to read and write compared to
using traditional promise chaining with .then() and .catch() methods.*/
