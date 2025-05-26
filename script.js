const OPENAI_API_KEY = 'YOUR_API_KEY'; // Replace with your OpenAI API key

const ssitContext = `SSIT (Shree Swaminarayan Institute of Technology) is a private engineering college in Gandhinagar, Gujarat. Established in 2001, affiliated with Gujarat Technological University. Offers UG and PG programs in Civil, Computer, Mechanical Engineering, IT, CSE, and MCA. Features include digital classrooms, IIT-Bombay-supported robotics labs, solar-powered campus, MOUs with SAP/AWS, and strong placement programs.`;

async function sendMessage(event) {
    if (event && event.key !== "Enter") return;

    const inputField = document.getElementById('userInput');
    const messages = document.getElementById('messages');
    const userInput = inputField.value.trim();
    if (!userInput) return;

    // Show user input
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = "user-input";
    userMessageDiv.innerHTML = `<p>You: ${userInput}</p>`;
    messages.appendChild(userMessageDiv);
    inputField.value = '';

    const loadingDiv = document.createElement('div');
    loadingDiv.className = "bot-input loading";
    loadingDiv.innerHTML = '<p>Bot is thinking...</p>';
    messages.appendChild(loadingDiv);
    messages.scrollTop = messages.scrollHeight;

    try {
        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                headers: {
                    "Authorization": `Bearer ${OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    model: "gpt-4.1-nano",
                    messages: [
                        {
                            role: "system",
                            content: `You are a helpful assistant for ${ssitContext}`
                        },
                        {
                            role: "user",
                            content: userInput
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 500
                })
            }
        );

        const result = await response.json();
        messages.removeChild(loadingDiv);

        let botText = "I'm sorry, I couldn't understand that.";
        if (result?.choices?.[0]?.message?.content) {
            botText = result.choices[0].message.content.trim();
        }

        const botResponseDiv = document.createElement('div');
        botResponseDiv.className = "bot-input";
        botResponseDiv.innerHTML = `<p>${botText}</p>`;
        messages.appendChild(botResponseDiv);
        messages.scrollTop = messages.scrollHeight;

    } catch (error) {
        messages.removeChild(loadingDiv);
        const errorDiv = document.createElement('div');
        errorDiv.className = "bot-input error";
        errorDiv.innerHTML = '<p>Sorry, I encountered an error. Please try again later.</p>';
        messages.appendChild(errorDiv);
    }
}
