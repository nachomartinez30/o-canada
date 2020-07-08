const calculoIMC = (altura, peso) => {
    if (altura && peso) {
        const alturaM = altura / 100;
        const imc = peso / Math.pow(alturaM, 2)
        return imc
    }

}
export default calculoIMC;