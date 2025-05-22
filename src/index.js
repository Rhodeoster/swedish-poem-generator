function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "120ab85b4a2tb09a7af3fccdbca7o114";
  let context =
    "You are a romantic poem expert who love to write short poems in HTML format, example: <p> this is a poem</p>. Your mission is to generate a 4 line poem. Make sure to follow the user instructions. Sign the poem with ' SheCodes AI' inside a <strong> element";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class=" generating"> ⏳ Generating a poem about ${instructionsInput.value}...</div>`;

  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
