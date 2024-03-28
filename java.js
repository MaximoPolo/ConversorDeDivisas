const logedIn = Boolean(localStorage.getItem("session"));
if(!logedIn){
    window.location.href = "sesion.html"
}

document.getElementById('convertirBtn').addEventListener('click', function() {
    const monto = parseFloat(document.getElementById('monto').value);
    const monedaOrigen = document.getElementById('moneda_origen').value;
    const monedaDestino = document.getElementById('moneda_destino').value;
    let resultado = 0;

    const BBDD = [
        { nombre: "tasaUSD_EUR", "tasa": 0.85 },
        { nombre: "tasaUSD_ARS", "tasa": 106.76 },
        { nombre: "tasaEUR_USD", "tasa": 1.18 },
        { nombre: "tasaEUR_ARS", "tasa": 125.62 },
        { nombre: "tasaARS_USD", "tasa": 0.0094 },
        { nombre: "tasaARS_EUR", "tasa": 0.0079 },
    ]
    if (monedaOrigen === 'USD' && monedaDestino === 'EUR') {
        const tasa = BBDD.find((tasa) => {
            return tasa.nombre === "tasaUSD_EUR"
        })
        resultado = monto * tasa.tasa
    } else if (monedaOrigen === 'USD' && monedaDestino === 'ARS') {
        const tasa = BBDD.find((tasa) => {
            return tasa.nombre === "tasaUSD_ARS"
        })
        resultado = monto * tasa.tasa;
    } else if (monedaOrigen === 'EUR' && monedaDestino === 'USD') {
        const tasa = BBDD.find((tasa) => {
            return tasa.nombre === "tasaEUR_USD"
        })
        resultado = monto * tasa.tasa;
    } else if (monedaOrigen === 'EUR' && monedaDestino === 'ARS') {
        const tasa = BBDD.find((tasa) => {
            return tasa.nombre === "tasaEUR_ARS"
        })
        resultado = monto * tasa.tasa;
    } else if (monedaOrigen === 'ARS' && monedaDestino === 'USD') {
        const tasa = BBDD.find((tasa) => {
            return tasa.nombre === "tasaARS_USD"
        })
        resultado = monto * tasa.tasa;
    } else if (monedaOrigen === 'ARS' && monedaDestino === 'EUR') {
        const tasa = BBDD.find((tasa) => {
            return tasa.nombre === "tasaARS_EUR"
        })
        resultado = monto * tasa.tasa;
    } else if (monedaOrigen === 'EUR' && monedaDestino === 'EUR') {
        resultado = monto 
    }else if (monedaOrigen === 'ARS' && monedaDestino === 'ARS') {
        resultado = monto
    } else {
        resultado = monto
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)} ${monedaDestino}`;
})
