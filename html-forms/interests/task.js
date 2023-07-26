const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.forEach(elem =>{
    elem.addEventListener('change', ()=>{
        if(elem.checked){
            elem.closest('.interest').querySelectorAll('.interest__check').forEach(el =>{
                el.checked = true;
            })
        } else{
            elem.closest('.interest').querySelectorAll('.interest__check').forEach(el =>{
                el.checked = false;
            })
        }
        
        let parentActive = elem.closest(".interests_active");
        if(parentActive){
            let parent = parentActive.previousElementSibling.querySelector('.interest__check');
            let neighbours = parentActive.querySelectorAll('.interest__check');
            let newArr = [];
            neighbours.forEach(el =>{
                newArr.push(el.checked);
            })
            
            if(newArr.every((element) => element === true)){
                parent.checked = true;
                parent.indeterminate = false;
            } else if(newArr.some((element) => element === true)){
                parent.checked = false;
                parent.indeterminate = true;
            } else{
                parent.checked = false;
                parent.indeterminate = false;
            }
        } 
    })
})


