const inputEl = document.querySelector("#input-el")
const buttonEl = document.querySelector("#button-el")
const convLength = document.querySelector("#converter1")
const convVolume = document.querySelector("#converter2")
const convMass = document.querySelector("#converter3")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

buttonEl.addEventListener("click", function() {
    const baseValue = inputEl.value
    const convMtoF = baseValue * meterToFeet
    const convFtoM = baseValue / meterToFeet

    const convLtoG = baseValue * literToGallon
    const convGtoL = baseValue / literToGallon

    const convKtoP = baseValue * kiloToPound
    const convPtoK = baseValue / kiloToPound

    inputEl.value = `0`

    convLength.textContent = `${baseValue} meters = ${convMtoF.toFixed(3)} feet | ${baseValue} feet = ${convFtoM.toFixed(3)} meters`
    convVolume.textContent = `${baseValue} liters = ${convLtoG.toFixed(3)} galoons | ${baseValue} feet = ${convGtoL.toFixed(3)} liters`
    convMass.textContent = `${baseValue} kilos = ${convKtoP.toFixed(3)} pounds | ${baseValue} pounds = ${convPtoK.toFixed(3)} kilos`
})