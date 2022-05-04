var box=document.querySelectorAll(".tab_box");
var content=document.querySelectorAll(".vc_item_area");
var invisible_area = document.querySelectorAll('.invisible_area')
var actionArea = document.getElementsByClassName('vc_action_area');

for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',function(){
        for(let i=0;i<box.length;i++){
            box[i].className="tab_box";
            this.className="tab_box active";
        }
        
        for(let i=0;i<content.length;i++){
            content[i].className="vc_item_area";
        }
        document.getElementById(this.dataset.id).className="vc_item_area active";
    })
}



for (let i=0; i<actionArea.length; i++){
    actionArea[i].addEventListener('click', function(){        
        // actionArea[i].classList.add('active');        
        document.getElementById(this.dataset.id).className="invisible_area select";
        
    })
}








