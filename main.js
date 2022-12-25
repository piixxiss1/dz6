const ROOT = document.getElementById('root')

const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent = 'show modal'
btnModal.style.cssText = `
background-color: white;
color: black;
font-size: 1rem;
margin: 0 auto;
display: block;
padding: 8px 10px;
border-radius: 50px;
border: none;
width: 200px;
height: 45px;
cursor: pointer;
`
btnModal.addEventListener('mouseover', () => {
    btnModal.style.backgroundColor = '#ca78de'
})
btnModal.addEventListener('mouseout', () => {
    btnModal.style.backgroundColor = 'white'
})



const modal = document.createElement('div')
modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
display: flex;
justify-content: center;
align-items: center;
`




const modalWindow = document.createElement('div')
modalWindow.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;
height: 400px;
background-color: white;
padding: 20px;
font-size: 1.5rem;
`

modalWindow.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sunt!'

modal.append(modalWindow)
btnModal.addEventListener('click', () => {
    console.log('clicked');
    ROOT.append(modal)
})

const closeModal = document.createElement('button')
closeModal.textContent = 'x'
modalWindow.append(closeModal)
closeModal.style.cssText = `
position: absolute;
top: 0;
right: 0;
border: none;
width: 30px;
height: 30px;
background-color: #ca78de;
`
closeModal.addEventListener('click', () => {
    modal.remove()
})
modal.addEventListener('click', () => {
    modal.remove()
})

