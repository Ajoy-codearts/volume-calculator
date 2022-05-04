var sum = 0;var sum2 = 0; var count = 0;
var counter = new Array();

var product = document.querySelectorAll('.product_item');
for(let i=0;i<product.length;i++){
    counter[i]=0;

    var plus_btn = product[i].querySelector('.plus');
    var minus_btn = product[i].querySelector('.minus');
    var total_value1 = document.querySelector('.total_value1');
    var total_value2 = document.querySelector('.total_value2');

    plus_btn.addEventListener('click',()=>{
        if(counter[i]<0){
            counter[i]=0;
        }
        counter[i]=counter[i] + 1;
        var get_cost = parseFloat(product[i].querySelector('.item_value1').textContent);
        var get_cost2 = parseFloat(product[i].querySelector('.item_value2').textContent);
        var item_no = product[i].querySelector('.item_no');
        var item_count = product[i].querySelector('.item_count');

        sum = sum + get_cost;
        sum2 = sum2 + get_cost2;
        item_no.innerHTML='('+ counter[i] +'x)';
        item_count.value= counter[i];
        total_value1.innerHTML= (sum).toFixed(1)+ 'ft3';
        total_value2.innerHTML = (sum2).toFixed(1)+ 'm³';
    })

    minus_btn.addEventListener('click',()=>{
        
        var get_cost = parseFloat(product[i].querySelector('.item_value1').textContent);
        var get_cost2 = parseFloat(product[i].querySelector('.item_value2').textContent);
        var item_no = product[i].querySelector('.item_no');
        var item_count = product[i].querySelector('.item_count');

        if(counter[i] > 0){
            sum = sum - get_cost;
            sum2 = sum2 - get_cost2;
            counter[i] = counter[i] - 1;
            item_no.innerHTML='('+ counter[i] + 'x)';
            item_count.value= counter[i];
            total_value1.innerHTML=(sum).toFixed(1)+ 'ft3';
            total_value2.innerHTML = (sum2).toFixed(1)+ 'm³';
        }
        
         if(counter[i]==0){
            item_no.innerHTML='';
            item_count.value='';
        }
        
        
        
    })
}


// item_count.value='';
// item_count.style.display='none';
// minus_btn.style.display='none';