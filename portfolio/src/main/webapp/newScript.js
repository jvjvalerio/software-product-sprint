/** fetches the hello response from the servlet and adds it to the html file via a container*/
async function showHelloJulioServlet() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const helloJulioContainer = document.getElementById('helloJulio-container');
  helloJulioContainer.innerText = textFromResponse;
}