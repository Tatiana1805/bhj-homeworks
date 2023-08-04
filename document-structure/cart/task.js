const cart = document.querySelector('.cart__products');
const addProduct = document.querySelectorAll('.product__add');
const del = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');

del.forEach(el => {
  el.onclick = ({ target }) => {
    target.nextElementSibling.textContent > 1 ? target.nextElementSibling.textContent-- : 1
  }
})

inc.forEach(el => {
  el.onclick = ({ target }) => {
    target.previousElementSibling.textContent++
  }
})

addProduct.forEach(el => {
  el.onclick = ({ target }) => {
    let parentTarget = target.closest('.product');
    let img = parentTarget.querySelector('.product__image').src;
    let count = parentTarget.querySelector('.product__quantity-value').textContent.trim();
    let dataId = parentTarget.dataset.id;
    let checkId = document.getElementById(`${dataId}`)
    if (checkId === null) {
      cart.innerHTML += `
      <div class="cart__product" id=${dataId}>
      <img class="cart__product-image" src=${img}>
      <div class="cart__product-count">${count}</div>
      </div>
      `
    } else {
      let a = checkId.querySelector('.cart__product-count').innerHTML;
      let sum = Number(a) + Number(count)
      checkId.querySelector('.cart__product-count').innerHTML = sum
    }
    // else {
    //   let a = checkId.querySelector('.cart__product-count').innerHTML;
    //   let sum = Number(a) + Number(count);
    //   checkId.querySelector('.cart__product-count').innerHTML = sum
    // }
    // parentTarget.querySelector('.product__quantity-value').textContent = 1
  }
})



