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
  if (messageContentInput.value !== '') {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = '';
  } else {
    alert('Error, enter your message')
  };
};

const addMessage = (author, content) => {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if (author === userName) message.classList.add('message--self');
  message.innerHTML = `
    <h3 class="message__author">${userName === author ? 'You' : author }</h3>
    <div class="message__content">
      ${content}
    </div>
  `;
  messagesList.appendChild(message);
}




addMessageForm.addEventListener('submit', (e) => sendMessage(e));
loginForm.addEventListener('submit', (e) => login(e));