const submit = document.getElementById('submit');
const output = document.getElementById('output');
const route = document.getElementById('route');

async function fetchAPI(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    output.innerHTML = JSON.stringify(data, null, 2);
  } catch(err) {
    console.log(err);
  }
}

function handleSubmit() {
  const url = `https://pacific-reef-95638.herokuapp.com/${route.value}`;
  fetchAPI(url);
}

submit.addEventListener('click', handleSubmit);