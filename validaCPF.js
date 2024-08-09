function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cpf = document.getElementById('cpf').value;
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (name === "" || email === "" || phone === "" || address === "" || cpf === "") {
        alert('Por favor, preencha todos os campos obrigatórios.'); return false;
    }
    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {

        document.getElementById('emailError').textContent = 'Email inválido.';
        return false;
    }
    // Validação do CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        document.getElementById('cpfError').textContent = 'CPF inválido.';
        return false;
    }
}