
class Form{

    constructor(root, image = 'test.png'){
        this.app = document.getElementById(root);
        this.app.innerHTML = `
            <form id="form" style="background-image:url(${image})">
                <div>
                <div class="form__field">
                    <span class="textinput">
                    <!-- type="email" чтобы показать вывод ошибки -->
                    <input name="card-data" type="number" class="textinput-control" id="card-data" placeholder="Номер карты">
                    <label for="name" class="registration__label">Номер карты</label>
                    <label class="registration__invalid">Неверный номер карты</label>
                    </span>
                </div>
                <div class="form__field">
                    <span class="textinput">
                    <input name="card-validity"  type="text" class="textinput-control" id="card-validity" placeholder="ММ / ГГ">
                    <label for="password" class="registration__label">ММ / ГГ</label>
                    </span>
                </div>
                <div class="form__field">
                    <span class="textinput">
                    <input name="card-name"  type="text" class="textinput-control" id="card-name" placeholder="Имя владельца">
                    <label for="password" class="registration__label">Имя владельца</label>
                    </span>
                </div>
                <div class="form__field">
                    <span class="textinput">
                    <input name="card-code"  type="password" class="textinput-control" id="card-code" placeholder="CVV">
                    <label for="password" class="registration__label">CVV</label>
                    </span>
                </div>
                </div>
                <div class="button_bottom">
                <button type="submit" class="button_type_submit">
                    <span class="button-text">Оплатить</span>
                </button>
                </div>
            </form>
        `;

        document.addEventListener('DOMContentLoaded', function(){
            let form = document.getElementById('form')
            form.addEventListener('submit', function(e){
                e.preventDefault()
                let inputs = document.getElementsByTagName('input')
                console.log(inputs)
                let obj = {}
                Array.from(inputs).forEach(element => {
                    obj[element.name] = element.value 
                });
                console.log(obj)
            })
        })
    }

    get(){
        let inputs = document.getElementsByTagName('input')
        console.log(inputs)
        let obj = {}
        Array.from(inputs).forEach(element => {
           obj[element.name] = element.value 
        });
        console.log(obj)
    }

    get_by_name(name){
        let input = document.getElementsByName(name)
        console.log(input.value)
    }

    change_img(image = 'test.png'){
        let form = document.getElementById('form')
        form.body.style.backgroundImage = `url(${image})`;
    }
}