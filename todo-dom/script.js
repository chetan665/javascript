let input = document.querySelector('input');
let adButton = document.querySelector('button');
let ul = document.querySelector('ul');

// Event listener

adButton.addEventListener('click', function () {
  let li = document.createElement('li');
  let dtButton = document.createElement('button');
  let li_text = document.createElement('span');

  dtButton.textContent = 'Delete';
  li_text.textContent = input.value;

  // ***event listener - button

  dtButton.addEventListener('click', function () {
    li.remove();
  });

  // ***event listener - text

  li_text.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // append items

  li.appendChild(li_text);
  li.appendChild(dtButton);
  ul.appendChild(li);

  input.value = '';
});

// Issue is,  if it has 1000 tasks
// 👉 then:
// 	• 1000 delete events
// 	• 1000 toggle events
// ❌ Heavy approach

// so use BUBBLING AND DELEGATION.
