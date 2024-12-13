const btn = document.getElementById('btn');
const para = document.querySelector('.para');

const getData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  data.map((item) => {
    para.innerHTML += item.name + '<br>';  // Append name and line break
  });
};

btn.addEventListener('click', getData);
