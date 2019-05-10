import { ask } from "./ask.js";

document.getElementById('clickMe').addEventListener('click', async () => {
  const result = await ask('Did you learn something?');

  document.getElementById('result').innerText = result ? 'Yes' : 'No';
});