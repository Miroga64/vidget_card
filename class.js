
class Form{

    constructor(root, image = 'test.png'){
        this.app = document.getElementById(root);
        this.app.innerHTML = `
            <form id="form" style="background-image:url(${image})">
                <div>
                <div class="form__field">
                    <span class="textinput">
                    <input name="card-data" inputmode="numeric" class="textinput-control" id="card-data" placeholder="Номер карты" pattern="^[0-9]{16}$">
                    <label for="card-data" class="registration__label">Номер карты</label>
                    <label class="registration__invalid">Неверный номер карты</label>
                    </span>
                    <span class="textinput">
                    <input name="card-validity" class="textinput-controlMini" id="card-validity" placeholder="ММ/ГГ" pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$">
                    <label for="card-validity" class="registration__label">ММ/ГГ</label>
                    <label class="registration__invalid">Неверная дата</label>
                    </span>
                </div>
                <div class="form__field">
                    <span class="textinput">
                    <input name="card-name" type="text" class="textinput-control" id="card-name" placeholder="Имя владельца" pattern="^(?:[A-Za-z]+ ?){1,3}$">
                    <label for="card-name" class="registration__label">Имя владельца</label>
                    </span>
                    <span class="textinput">
                    <input name="card-code" type="number" inputmode="numeric" type="password" class="textinput-controlMini" id="card-code" placeholder="CVV" pattern="^[0-9]{3}$">
                    <label for="card-code" class="registration__label">CVV</label>
                    <label class="registration__invalid">Неверный CVV</label>
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