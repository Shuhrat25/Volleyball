const chatBox = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const chatBox2 = document.getElementById('chatMessages2');
const userInput2 = document.getElementById('userInput2');
const sendBtn2 = document.getElementById('sendBtn2');

// Тематические сообщения для имитации
const volleyMessages = [
    { name: "Sardor", text: "Привет! Кто сегодня на тренировку?" },
    { name: "Anvar", text: "Я буду, нужно отработать подачу." },
    { name: "Jasur", text: "Ребята, а какое задание было по теории?" },
    { name: "Shaxzoda", text: "Нужно разобрать тактику 6-0." },
    { name: "Sardor", text: "Я читал про это в методичке для Bitiruv ishi." },
    { name: "Anvar", text: "Главное — не забывать про подстраховку!" },
    { name: "Jasur", text: "Я возьму мячи." }
];

let msgIndex = 0;
const MAX_MESSAGES = 50; // Лимит сообщений

function checkLimit() {
    // Получаем все сообщения в чате
    const messages = chatBox.getElementsByClassName('message');
    const messages2 = chatBox2.getElementsByClassName('message');
    
    // Если сообщений больше лимита
    if (messages.length > MAX_MESSAGES) {
        // Удаляем самое первое (самое старое) сообщение
        chatBox.removeChild(messages[0]);
    }
    // Если сообщений больше лимита
    if (messages2.length > MAX_MESSAGES) {
        // Удаляем самое первое (самое старое) сообщение
        chatBox2.removeChild(messages2[0]);
    }
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
    chatBox2.scrollTop = chatBox2.scrollHeight;
}

function createMessage(name, text, isMy = false) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.classList.add(isMy ? 'my' : 'other');
    
    div.innerHTML = `
        <span class="user-tag">${name}</span>
        <p>${text}</p>
    `;
    
    chatBox.appendChild(div);
    
    // Проверяем лимит после добавления нового
    checkLimit();
    
    // Прокручиваем вниз
    scrollToBottom();
}

function createMessage2(name, text, isMy = false) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.classList.add(isMy ? 'my' : 'other');
    
    div.innerHTML = `
        <span class="user-tag">${name}</span>
        <p>${text}</p>
    `;
    
    chatBox2.appendChild(div);
    
    // Проверяем лимит после добавления нового
    checkLimit();
    
    // Прокручиваем вниз
    scrollToBottom();
}

// Имитация чата (каждые 2 секунды для теста лимита)
setInterval(() => {
    const m = volleyMessages[msgIndex];
    createMessage(m.name, m.text);
    msgIndex = (msgIndex + 1) % volleyMessages.length;
}, 2000);

// Имитация чата (каждые 2 секунды для теста лимита)
setInterval(() => {
    const m = volleyMessages[msgIndex];
    createMessage2(m.name, m.text);
    msgIndex = (msgIndex + 1) % volleyMessages.length;
}, 2000);

// Отправка пользователем
function sendMessage() {
    const text = userInput.value.trim();
    if (text) {
        createMessage("Siz", text, true);
        userInput.value = "";
    }
}

function sendMessage2() {
    const text = userInput2.value.trim();
    if (text) {
        createMessage2("Siz", text, true);
        userInput2.value = "";
    }
}

sendBtn.onclick = sendMessage;
userInput.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };

sendBtn2.onclick = sendMessage2;
userInput2.onkeypress = (e) => { if(e.key === 'Enter') sendMessage2(); };