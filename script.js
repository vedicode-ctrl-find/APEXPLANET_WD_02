const form = document.getElementById('assignmentForm');
const subjectInput = document.getElementById('subject');
const titleInput = document.getElementById('title');
const dueDateInput = document.getElementById('dueDate');
const assignmentsGrid = document.getElementById('assignmentsGrid');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const subject = subjectInput.value.trim();
  const title = titleInput.value.trim();
  const dueDate = dueDateInput.value;

  if (!subject || !title || !dueDate) {
    errorMsg.textContent = "Please fill in all fields correctly.";
    return;
  }

  errorMsg.textContent = "";
  
  addAssignment(subject, title, dueDate);
  form.reset();
});

function addAssignment(subject, title, dueDate) {
  const card = document.createElement('div');
  card.className = 'assignment-card';

  card.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Subject:</strong> ${subject}</p>
    <small><strong>Due:</strong> ${dueDate}</small>
    <button class="remove-btn" title="Remove Assignment">&times;</button>
  `;

  const removeBtn = card.querySelector('.remove-btn');
  removeBtn.addEventListener('click', () => {
    card.remove();
  });

  assignmentsGrid.appendChild(card);
}
