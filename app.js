function updateValues() {
  const transactionsPerWeek = document.getElementById('transactions').value;
  document.getElementById('transactionsValue').innerText = transactionsPerWeek;

  const annualTransactions = transactionsPerWeek * 1;

  document.getElementById('co2').innerText = (annualTransactions * 130).toFixed(
    0
  );
  document.getElementById('bags').innerText = (annualTransactions * 13).toFixed(
    0
  );
  document.getElementById('straws').innerText = (
    annualTransactions * 60
  ).toFixed(0);
  document.getElementById('cups').innerText = (annualTransactions * 3).toFixed(
    0
  );
  document.getElementById('miles').innerText = (
    annualTransactions * 400
  ).toFixed(0);
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
