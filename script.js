function sendMessage(event) {
    if(event&&event.key!=="Enter"){
        return
    }
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    const messages = document.getElementById('messages');
    const userMessageText = document.createElement('p');
    userMessageText.textContent = "You: " + userInput;
    const userMessageWrapper=document.createElement('div');
    userMessageWrapper.className="user-input";
    userMessageWrapper.appendChild(userMessageText);
    messages.appendChild(userMessageWrapper);

    // Clear input
    document.getElementById('userInput').value = '';

    // Simulating bot response
    const botResponse = document.createElement('p');
     botResponse.textContent =("how can I help you?") 
    

    botResponse.style.color = 'blue';
    botResponse.className="bot-input";
    messages.appendChild(botResponse);}