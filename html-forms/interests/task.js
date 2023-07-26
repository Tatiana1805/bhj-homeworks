const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.forEach(element =>{
    element.addEventListener('click', ()=>{
        let child = element.closest('.interest').querySelectorAll('.interest__check');
        if(element.checked === true){
            child.forEach(el =>{
                el.checked = true;
            })
        } else{
            child.forEach(el =>{
                el.checked = false;
            })
        }
	})
})
    //     // let neighbours = elem.closest('.interests_active').querySelectorAll('.interest__check');
    //     // console.log(neighbours);
    //     // let parentHasChild = elem.closest('.interests_active');

    //     // let grand = parent.closest('.interests_active').parentElement.querySelector('input');
    //     // console.log(grand);
    //     let parent = (elem.closest(['ul']).parentNode).querySelector('input');
    //     // let grand = parent.closest('.interests_active').parentElement.querySelector('input');
    //     // console.log(grand)

    //     function searchParent(){
            
    //         let elem = document.querySelector('.interest__check')
    //         while (elem.parentElement) {
    //             elem = elem.parentElement;
    //     }
    // }
    //     searchParent()

    //     // console.log(parentHasChild);
    //     // if(elem){
    //     //     // console.log(parent)
    //     //     // searchParent()
    //     //     let neighbours = elem.querySelectorAll('.interest__check');
    //     //     // console.log(neighbours);
    //     //     let newArr = [];
    //     //     neighbours.forEach(el =>{
    //     //         newArr.push(el.checked);
    //     //     })
        
    //         function changeParent (){
    //             let neighbours = elem.querySelectorAll('.interest__check');
    //             // console.log(neighbours);
    //             let newArr = [];
    //             neighbours.forEach(el =>{
    //                 newArr.push(el.checked);
    //             })
    //             if(newArr.every((element) => element === true)){
    //                 parent.checked = true;
    //                 parent.indeterminate = false;
    //             } else if(newArr.some((element) => element === true)){
    //                 parent.checked = false;
    //                 parent.indeterminate = true;
    //             } else if(newArr.every((element) => element === false)){
    //                 parent.checked = false;
    //                 parent.indeterminate = false;
    //             }
    //         }
    //         changeParent(newArr, parent);
    //  //   }
   // })
//})



