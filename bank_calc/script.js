function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100;
    const years = parseFloat(document.getElementById('years').value);

    const futureValue = principal * Math.pow(1 + interestRate, years);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
