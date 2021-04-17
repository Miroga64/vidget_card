document.addEventListener('DOMContentLoaded', function(){
    let form = document.getElementById('form')
    form.addEventListener('submit', function(e){

        e.preventDefault()
        let inputs = document.getElementsByTagName('input')

        let obj = {}
        Array.from(inputs).forEach(element => {
           obj[element.name] = element.value 
        });

        console.log(obj)
    })
})