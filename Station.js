function* getStop(){
    yield "Sadang";
    yield "Bangbae";
    yield "Seocho";
    yield "Seoul NAT'L Univ of education";
    yield "Gangnam";
    yield "Yeoksam";
}


const krail = getStop();
const nextStopButton = document.querySelector('#next-stop');
nextStopButton.addEventListener('click', ()=>{
    let currentStop = krail.next();
    if(currentStop.done){
        console.log("We made it!");
        nextStopButton.setAttribute('disabled', true)
    }else{
        console.log(currentStop.value);
    }
});