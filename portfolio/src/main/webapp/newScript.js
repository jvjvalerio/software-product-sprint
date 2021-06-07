/** Fetches the current date from the server and adds it to the page. */
async function showHelloJulioServlet() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const helloJulioContainer = document.getElementById('helloJulio-container');
  helloJulioContainer.innerText = textFromResponse;
}