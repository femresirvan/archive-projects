window.onload=function(){
    const enterNumber = (value) => {
        const input = document.getElementById("input");
        input.value += value;
        console.log(value);
    }
    
    const cBtn = document.getElementById("c");
    const submitBtn = document.getElementById("submit");
    const backspaceBtn = document.getElementById("backspaceBtn");
    
    backspaceBtn.addEventListener('click', () => {
        const input = document.getElementById("input");
        let inputStr = new String();
        inputStr = input.value;
        console.log(typeof(inputStr));
        input.value = inputStr.slice(0,input.value.length-1);
    })
    
    cBtn.addEventListener('click', () => {
        const input = document.getElementById("input");
        input.value = "";
    })
    
    submitBtn.addEventListener('click', () => {
        const input = document.getElementById("input");
        if(input.value == questionArray[count]) dogruMuArray[count] = 1; 
        else dogruMuArray[count] = 0;
        if(count < 5){
            input.value = "";
            document.getElementById(questionArray[count]).classList.add('d-none');
            count++;
            if(count != 5)
            document.getElementById(questionArray[count]).classList.remove('d-none');
        }
        let sonuc = 0;
        if(count == 5){
            document.getElementById("anaEkran").classList.add('d-none');
            for(let i = 0;i<5;i++){
                sonuc += dogruMuArray[i];
            }
            if(sonuc == 5){
                document.getElementById("basariEkrani").classList.remove('d-none');
                const basariSonuc = document.getElementById('basariSonuc');
                basariSonuc.innerHTML = '5 SORUDAN ' + sonuc + ' KADARINI DOĞRU BİLDİNİZ';
            }
            else{
                document.getElementById("yenilgiEkrani").classList.remove('d-none');
                const yenilgiSonuc = document.getElementById('yenilgiSonuc');
                yenilgiSonuc.innerHTML = '5 SORUDAN ' + sonuc + ' KADARINI DOĞRU BİLDİNİZ';
            }
        }
    })
    
    const btn = document.querySelectorAll(".btn");
    for(let i = 0;i<btn.length;i++){
        try {
            const btn1 = document.getElementById(i+'b');
            btn1.addEventListener('click',() => {
                enterNumber(i)
            });
        } catch (error) {
            
        }
    }
  }
