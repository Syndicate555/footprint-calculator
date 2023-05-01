function updateValues() {
  const transactionsPerWeek = document.getElementById('transactions').value;
  document.getElementById('transactionsValue').innerText = transactionsPerWeek;

  const annualTransactions = transactionsPerWeek * 1;

  const co2 = annualTransactions * 130;
  document.getElementById('co2').innerText =
    co2 > 1000 ? (co2 / 1000).toFixed(1) + ' kg' : co2.toFixed(0) + ' g';

  document.getElementById('bags').innerText = (annualTransactions * 13).toFixed(
    0
  );
  document.getElementById('straws').innerText = (
    annualTransactions * 60
  ).toFixed(0);
  document.getElementById('cups').innerText = (annualTransactions * 3).toFixed(
    0
  );

  const miles = annualTransactions * 400;
  document.getElementById('miles').innerText =
    miles > 1000 ? (miles / 1000).toFixed(1) + ' km' : miles.toFixed(0) + ' m';

  document.getElementById('bottles').innerText = (
    annualTransactions * 3
  ).toFixed(0);
  document.getElementById('Lightbulb').innerText = (
    annualTransactions * 5
  ).toFixed(0);
  document.getElementById('cutlery').innerText = (
    annualTransactions * 30
  ).toFixed(0);
  updateProgress();
}

function updateProgress() {
  const slider = document.getElementById('transactions');
  const progress = (slider.value / slider.max) * 100;
  slider.style.setProperty('--progress', progress + '%');
}

// Initialize values
updateValues();
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    const icon = question.querySelector('.fas');
    icon.style.transform =
      answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});
