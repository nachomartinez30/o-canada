const calculoTiempoMax = (asnm) => {
    console.log(asnm);

    /* asnm => Altura sobre el nivel del mar */
    if (asnm) {
        if (asnm < 1200) return "45'00''";
        if (asnm > 1200 && asnm <= 1500) return "45'30''";
        if (asnm > 1500 && asnm <= 1800) return "45'45''";
        if (asnm > 1800 && asnm <= 2100) return "46'00''";
        if (asnm > 2100 && asnm <= 2400) return "46'15''";
        if (asnm > 2400) return "46'30''";
    } else {
        return ''
    }
}

export default calculoTiempoMax;