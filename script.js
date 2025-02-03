document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const producto = document.getElementById('producto').value;
    const puntos = document.getElementById('puntos').value;

    const tbody = document.querySelector('#clientesTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${producto}</td>
        <td>${puntos}</td>
    `;

    tbody.appendChild(newRow);

    // Limpiar el formulario
    document.getElementById('clienteForm').reset();
});