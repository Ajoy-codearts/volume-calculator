var box=document.querySelectorAll(".tab_box");
var sum = 0;var sum2 = 0; var count = 0;
var product = document.querySelectorAll('.product_item');
var product_box = document.querySelector('.product_box');

var counter = new Array();
for(let i=0;i<box.length;i++){
    counter[i]=new Array(product.length);
}


for(let i=0;i<box.length;i++){
    for(let j=0;j<product.length;j++){
        

        counter[i][j]=0;
        var product_list = document.getElementById(product_box.dataset.id);
        console.log(product_box.dataset.id);
        var product_catch = product_list.children;
        // var plus_btn = product_catch[j].querySelector('.plus');
       
        // var total_value1 = box.querySelector('.total_value1');
        // var total_value2 = box.querySelector('.total_value2');
        
    
        plus_btn.addEventListener('click',()=>{

            console.log(counter);
            // if(counter[j]<0){
            //     counter[j]=0;
            // }
            // counter[j]=counter[j] + 1;
            // var get_cost = parseFloat(product[j].querySelector('.item_value1').textContent);
            // var get_cost2 = parseFloat(product[j].querySelector('.item_value2').textContent);
            // var item_no = product[j].querySelector('.item_no');
            // var item_count = product[j].querySelector('.item_count');
            // var total_value1_v2 = box[i].querySelector('.total_value1');
            // var total_value2_v2 = box[i].querySelector('.total_value2');
    
            // sum = sum + get_cost;
            // sum2 = sum2 + get_cost2;
            // item_no.innerHTML='('+ counter[j] +'x)';
            // item_count.value= counter[j];
            // total_value1_v2.innerHTML= (sum).toFixed(1)+ 'ft3';
            // total_value2_v2.innerHTML = (sum2).toFixed(1)+ 'm³';
            // console.log(i,j);
        })
    
        // minus_btn.addEventListener('click',()=>{
            
        //     var get_cost = parseFloat(product[i][j].querySelector('.item_value1').textContent);
        //     var get_cost2 = parseFloat(product[i][j].querySelector('.item_value2').textContent);
        //     var item_no = product[i][j].querySelector('.item_no');
        //     var item_count = product[i][j].querySelector('.item_count');
        //     var total_value1_v2 = box[i].querySelector('.total_value1');
        //     var total_value2_v2 = box[i].querySelector('.total_value2');
    
        //     if(counter[i] > 0){
        //         sum = sum - get_cost;
        //         sum2 = sum2 - get_cost2;
        //         counter[j] = counter[j] - 1;
        //         item_no.innerHTML='('+ counter[j] + 'x)';
        //         item_count.value= counter[j];
        //         total_value1_v2.innerHTML=(sum).toFixed(1)+ 'ft3';
        //         total_value2_v2.innerHTML = (sum2).toFixed(1)+ 'm³';
        //     }
            
        //      if(counter[j]==0){
        //         item_no.innerHTML='';
        //         item_count.value='';
        //     }
            
            
            
        // })
    }
}
