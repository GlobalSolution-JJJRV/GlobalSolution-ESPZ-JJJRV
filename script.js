// DARK AND LIGHT MODE SWITCH
//Modifica os temas da página
const lightModes = document.getElementById('light-dark')//Seleciona o ID dos modos
lightModes.addEventListener('click',()=>{//Espera o click para dar o callback
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
// DARK AND LIGHT MODE SWITCH

//SECTION VISIBILITY
//Mostra em qual section o usuario está
const links = document.querySelectorAll('a') //Seleciona todos os links anchor
const sections = document.querySelectorAll('.sections section')// Seleciona todas as section

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
            if (!entry.isIntersecting){//Se a section não mudar, ignora
                return
            }
            
        const entrySelect = entry.target.id //seleciona o id de cada section

        links.forEach(link =>{
            if (link.getAttribute('href')==`#${entrySelect}`){ 
                link.classList.add('active')//deixa apenas o ID correspondente habilitado
            }else{
                link.classList.remove('active')
            }
        })
    })
},{
    root: null,
    rootMargin: "-30% 0px -70% 0px", //onde e como o observador vai observar
    threshold: 0
})
sections.forEach(section=>observer.observe(section))//verifica cada section com o .observe()
//SECTION VISIBILITY

//QUIZ
//Faz o Quiz funcionar
const form = document.getElementById('quiz') //Seleciona o formulário
const result = document.getElementById('resultado')//Seleciona o campo de resultado 

form.addEventListener('submit',(standard)=>{//Espera a submissão do formulário para iniciar o callback
    standard.preventDefault()//Impede a página de recarregar

    const questions = document.querySelectorAll('fieldset')//Seleciona todas as questões 
    let grade = 0

    questions.forEach(answer =>{//Para cada fieldset/questão

        const correct = answer.dataset.resposta //Seleciona o atributo 'data' do fieldset
        const checkedAnswer = answer.querySelector("input[type='radio']:checked")//Seleciona a opção marcada
        
        if(checkedAnswer && checkedAnswer.value == correct){//Se não houver opção marcada, ou errado ele não aceita o valor.
            grade++ //Essa chave lógica depende de dois trues, já que se fosse apenas a opção correta ele
        }           //tentaria acessar o valor de null, o que da erro e quebra o codigo
    })

    result.textContent = `Resultado: ${grade} acertos.`

})
//QUIZ

