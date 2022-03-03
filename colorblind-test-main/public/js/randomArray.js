// Math.floor(Math.random() * 14); //0 ile 13 arasında random değer döner
let count = 0;
let dogruMuArray = new Array();
const imgArray = ['2', '3', '5', '6', '7', '8', '12', '16', '29', '42', '45', '97'];
let questionArray = new Array();
for (let i = 0; i < 5; i++) {
    let a = Math.floor(Math.random() * 12); // 11 ye kadar random sayı seçiyor
    questionArray[i] = imgArray[a];

    for (;;) {
        for (let j = 0; j < i; j++) {
            if (questionArray[j] == imgArray[a]) {
                a = Math.floor(Math.random() * 14);
                questionArray[i] = imgArray[a];
            }
        }
        break;
    }
}

    document.getElementById(questionArray[count]).classList.remove('d-none');




    // document.getElementById("MyElement").classList.add('MyClass'); CLASS EKLEME
    // document.getElementById("MyElement").classList.remove('MyClass'); CLASS SİLME