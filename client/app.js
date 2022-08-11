const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');
let userName = '';

console.log(userNameInput);

const login = (e) => {
  e.preventDefault();
  console.log('test');
  if (userNameInput.value !== '') {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
  } else {
    alert('Error, enter your user name');
  };
};

console.log(userName);



loginForm.addEventListener('submit', (e) => login(e));