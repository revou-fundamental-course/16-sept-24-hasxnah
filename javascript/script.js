replaceName();

function replaceName() {
    let guestName = prompt("Halo, silakan masukkan nama Anda!", "");
    document.getElementById("guest_name").innerHTML = guestName;

}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    //get DOM semua image banner
    let listImage = document.getElementsByClassName('banner');
    console.log(indexSlide);
    console.log(listImage);

    //reset indexSlide
    if (index > listImage.length) indexSlide = 1; 

    //hide all images
    let i = 0;
    while (i < listImage.length) {
       listImage[i].style.display = 'none';
       i++;
    }

    //show selector image
    listImage[indexSlide - 1].style.display = 'block';
    
}

//autorun banner
setInterval(() => nextSlide(1), 2000);


function validateForm() {
    let inputName = document.getElementById('input-name').value;
    let inputDate = document.getElementById('input-date').value;
    let inputGender = '';
    let inputMessages = document.getElementById('input-messages').value;
    

    let radioButtons = document.getElementsByName('input-gender');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            inputGender = radioButton.value;
            break;
        }
    }

    if (inputName == "" || inputDate == "" || inputGender == "" || inputMessages == "") {
        alert("Lengkapi data!");
    } else {
        document.getElementById('sender-full-name').innerHTML = inputName;
        document.getElementById('sender-birth-date').innerHTML = inputDate;
        document.getElementById('sender-gender').innerHTML = inputGender;
        document.getElementById('sender-messages').innerHTML = inputMessages;

        //alert('Sukses Submit');
    }
    console.log(inputName);
}




