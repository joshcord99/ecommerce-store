const cartEl = document.querySelectorAll('.card');
const saleitems = {
    titles:['bag','shoes'],
    imgurl:['https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg'],
    prices:[10,50]
};
const cartItms = {
    titles:[],
    prices:[]
};
for (const Elmt of cartEl){
    
    Elmt.addEventListener('click',function(e){
        const element = e.target;
        if(element.matches('a')){
            const index  = element.getAttribute('data-index');
            cartItms.titles.push(saleitems.titles[index]);
            cartItms.prices.push(saleitems.prices[index]);
        }
        console.log(cartItms);
    })
}
// toggle between Login and Registration


// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

const signupbtn = document.querySelector('#signup');
const loginbtn = document.querySelector('#login');
signupbtn.addEventListener('click',function(){
    signupbtn.parentElement.classList.toggle('invisible');
    loginbtn.parentElement.classList.toggle('invisible');
})
loginbtn.addEventListener('click',function(){
    loginbtn.parentElement.classList.toggle('invisible');
    signupbtn.parentElement.classList.toggle('invisible');
})
