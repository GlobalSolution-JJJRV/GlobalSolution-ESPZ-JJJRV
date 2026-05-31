
//Modifica os temas da página
const lightModes = document.getElementById('light-dark')
lightModes.addEventListener('click',()=>{
    const currentMode = lightModes.getAttribute('alt')
    const modeSwitch = document.getElementById('mode')
    if (currentMode == 'darkMode'){ //Dark para light
        lightModes.setAttribute('alt','lightMode')
        lightModes.setAttribute('src','images/light-dark/lightMode.svg')
        modeSwitch.setAttribute('href','css/lightStyles.css')

    }else if(currentMode == 'lightMode'){ //Light para galaxy
        lightModes.setAttribute('alt','galaxyMode')
        lightModes.setAttribute('src','images/light-dark/galaxyMode.svg')
        modeSwitch.setAttribute('href','css/galaxyStyles.css')
    }else{ //Galaxy para dark
        lightModes.setAttribute('alt','darkMode')
        lightModes.setAttribute('src','images/light-dark/darkMode.svg')
        modeSwitch.setAttribute('href','css/darkStyles.css')
    }
})