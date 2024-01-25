const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault()
    let height=parseInt(document.querySelector('.height').value);
    let weight=parseInt(document.querySelector('.weight').value);
    let results=document.querySelector('.result');

    if(height==='' || height<=0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight==='' || weight<=0 || isNaN(weight)){
        results.innerHTML=`Please give a valid height ${weight}`;

    }
    else{
        const bmi=(weight/((height*weight)/1000)).toFixed(2);
        // for results
        results.innerHTML=`<span>${bmi}</span>` 

    }
})
