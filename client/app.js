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
    console.log(userName);
  } else {
    alert('Error, enter your user name');
  };
};

const sendMessage = (e) => {
  e.preventDefault();
  if (messageContentInput !== '') {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = '';
  } else {
    alert('Error, enter your message')
  };
};




addMessageForm.addEventListener('submit', (e) => sendMessage(e));
loginForm.addEventListener('submit', (e) => login(e));