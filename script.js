const OPENAI_API_KEY = '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'; // Replace with your OpenAI API key

const ssitContext = `Shree Swaminarayan Institute of Technology (SSIT), Gandhinagar, Gujarat, established in 2001, is affiliated to Gujarat Technological University (GTU) and approved by AICTE. It offers B.E. programs in Computer Engineering, Information Technology, Mechanical, Civil, and CSE with AI, and a PG program in MCA.

Facilities include:

Lush Green Campus In Twin City
Extremely Rich And Properly Managed Library
Ahmedabad & Gandhinagar's First Solar Powered College
Cricket, Football & Volleyball Outdoor Ground
AMTS & ST Bus Stand At Campus
E - Yantra Robotics Lab & OSTC Lab Supported By IIT - Bombay
Solidworks Campus License For Cad, Cam & Cae
Sports & Cultural Activities Like “NIJANAND”
International Career Center MOU With “Unixperts”
COE On Emerging Technologies Like SAP & AWS

Course details:

Civil Engineering : duration-4 years , Intake-30 , Tution Fees-33,600/sem
Mechanical Engineering : duration-4 years , Intake-30 , Tution Fees-33,600/sem
Computer science & Engineering : duration-4 years , Intake-60 , Tution Fees-33,600/sem
Computer Engineering : duration-4 years , Intake-120 , Tution Fees-33,600/sem
Information Technology: duration-4 years , Intake-120 , Tution Fees-33,600/sem
Masters of computer Applications : duration-2 years , Intake-120 , Tution Fees-30,500/sem

clubs at SSIT: 

SSIP:Govt of Gujarat has built up an approach for giving help to Start-ups/Innovation. Under this plan, any individual/team of students having imaginative thought/Concept will be qualified or potentially Universities/schooling organizations, Incubation Center/PSUs/R&D Institutions/Private and different foundations will be qualified as an establishment to help and guide to trend-setters as affirmed by Committee.The Student Start-up and Innovation Policy of Government of Gujarat means to make an incorporated, state-wide, college-based development ecosystem to help advancements and innovative thoughts of youthful understudies (diploma students) and give a favourable climate to ideal tackling of their inventive interest. Shree Swaminarayan Institute of Technology, Bhat, Gandhiagar strives to fulfil objectives of such outstanding policy of state Govt through funding right from POC stage and making tireless efforts.

GIC:Imagination is the base of innovation. So we at GIC nurture the soft skills and talent of the students to lead their imagination in a proper way. GIC has been designed to establish close bonding between industries, entrepreneur and students to make research and development at the University relevant to the needs of industries at national and international levels. It aims to involve the industries, along with the students and faculty members, in an innovation campaign, whereby GTU rejuvenates technology education and develops quality research at the University and helps create a culture of design, new and improved products and processes in our industry.

OSTC:OSTC provides an emerging education practice that allows students to capitalize on the scope and power of technology to create and manage their learning experiences and developed interactive application.

RedHat:Red Hat® Academy is an academic training program designed to help institutions differentiate themselves by providing an enterprise-ready Linux and open-source curriculum.

Robotics DIY:The concept and creation of autonomously operating machines dates back a long time, but credible research into the functionality and potential uses of robots did not grow substantially until the 20th century. And today, robotics is a rapidly growing field, as we continue to research, design and build new robots that serve various practical purposes including domestic, commercial and military.

SolidWorks:It is based on parametric modelling and is primarily used to create 3D models and assemblies. SOLIDWORKS has also been adopted in the world of additive manufacturing as it enables engineers to save their models in a STL format; the format needed for a 3D model to be processed by 3D printing software.

E-Yantra:e-Yantra is a robotics outreach project, an initiative of the Department of Computer Science and Engineering at the (IIT Bombay). It is funded by the Ministry of Education, Government of India, under the National Mission on Education through ICT (NMEICT). The goal of e-Yantra is to complement existing Higher Education systems worldwide and solve local problems across a variety of domains such as: Agriculture, Disaster, Manufacturing Défense, Home, Smart Cities and Service Industries through technology.

3D Modeling Design:3D modeling is the process of developing a mathematical representation of any surface of an object (inanimate or living) in three dimensions via specialized software. A 3D Model can also be displayed as a two-dimensional image through a process called 3D rendering or used in a computer simulation of physical phenomena. The 3D model can be physically created using 3D printing devices that form 2D layers of the model with three-dimensional material, one layer at a time. In terms of game development, 3D modeling is merely a stage in the entire development process.
                                

Admissions are via ACPC for B.E., and GUJARAT CET/Merit-based for MCA.
Website: https://ssit.co.in
Contact: info@ssit.co.in | +91-1234567890`;



    //register and login

//     document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("registerBtn").addEventListener("click", register);
//   document.getElementById("loginBtn").addEventListener("click", login);
// });

    function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (!username || !password) {
    alert("Please fill all fields.");
    return;
  }

  // Check if user already exists
  if (localStorage.getItem(username)) {
    alert("Username already exists. Please choose another.");
    return;
  }
//   console.log("Register clicked");
// alert("Register clicked");

  // Save to localStorage (use JSON to support multiple fields later)
  localStorage.setItem(username, JSON.stringify({ password }));

  alert("Registration successful!");
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const userData = localStorage.getItem(username);

  if (!userData) {
    document.getElementById("message").innerText = "User not found!";
    return;
  }

  const storedData = JSON.parse(userData);

  if (storedData.password === password) {
    sessionStorage.setItem("loggedInUser", username);
    alert(`Welcome, ${username}! You have successfully logged in.`);

    // Redirect to main page
    window.location.href = "index.html";
    // document.getElementById("message").innerText = `Welcome, ${username}! You are logged in.`;
  } else {
    document.getElementById("message").innerText = "Incorrect password!";
  }
}

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
