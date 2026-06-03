let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

button.addEventListener('click', function (e) {
  console.log(e);
  console.log(event.target);
  console.log(event.type);

  let li = document.createElement('li');

  let span = document.createElement('span');
  span.textContent = input.value;

  let dtButton = document.createElement('button');
  dtButton.textContent = 'Delete';

  li.appendChild(span);
  li.appendChild(dtButton);
  ul.appendChild(li);
  input.value = '';
});

ul.addEventListener('click', function (event) {
  if (event.target.tagName == 'SPAN') {
    event.target.classList.toggle('completed');
  } else if (event.target.tagName == 'BUTTON') {
    event.target.parentElement.remove();
  }
});
