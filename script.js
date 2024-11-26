const mailText = "Г-жо Христова, ще дойдете ли с нас на бала?"
let hasOpened = false;
const heartsContainer = document.getElementById('heart-container');
function openEmail(emailItem) 
{ 
    if(hasOpened === true){
        return;
    };
    hasOpened = true;
    const envelope = emailItem.querySelector('.envelope'); 
    envelope.classList.add('open'); 

    setTimeout(()=>{
        let i= 0;
        const contentText = emailItem.querySelector(".contentText")
        const typeInterval = setInterval(()=>{
            contentText.textContent += mailText.charAt(i);
            i++;
            if(i === mailText.length){
                clearInterval(typeInterval);
            }
        }, 100);

    }, 2000);
}

function startFallingHearts(){
    heartsContainer.style.display = "block";
    setInterval(createHeart, 300);

}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = `${Math.random() * 100}vw`;

    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

    heartsContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000); 
}

function moveButton(buttonToMove){
    buttonToMove.style.position ="absolute";

    const screenWidth = window.innerWidth - 200;
    const screenHeight = window.innerHeight - 200;

    const buttonWidth = buttonToMove.offsetWidth;
    const buttonHeight = buttonToMove.offsetHeight;

    const randomX = Math.random() * (screenWidth - buttonWidth);
    const randomY = Math.random() * (screenHeight - buttonHeight);
    buttonToMove.style.left = `${randomX}px`;
    buttonToMove.style.top = `${randomY}px`;
}
