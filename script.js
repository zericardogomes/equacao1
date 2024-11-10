function simularCodigoC() {
    const a = parseInt(document.getElementById("numA").value);
    const b = parseInt(document.getElementById("numB").value);
    const R = 2 * (a + b);

    document.getElementById("resultado").textContent = `Resultado: ${R}`;
}



