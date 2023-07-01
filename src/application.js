import { htmlEscape } from 'escape-goat';

// BEGIN (write your solution here)

function capitalize(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}

function createOnSubmitMessage(entries) {
  const parent = document.createElement('div');
  const submitConfirmation = document.createElement('p');
  submitConfirmation.textContent = 'Feedback has been sent';
  parent.append(submitConfirmation);
  
  for (const [name, value] of entries) {
    const entry = document.createElement('div');
    const escapedValue = htmlEscape(value);
    entry.innerHTML = `${capitalize(name)}: ${escapedValue}`;
    parent.append(entry);
  }
  return parent;
}

function handler(e) {
  e.preventDefault();
  const formEl = e.target;
  
  const formData = new FormData(formEl);
  const formEntries = [...formData.entries()];
  
  formEl.replaceWith(createOnSubmitMessage(formEntries));
}

export default function displayEscapedSubmittedFormData() {
  const formEl = document.querySelector('.feedback-form');
  formEl.addEventListener('submit', handler); 
}
// END
