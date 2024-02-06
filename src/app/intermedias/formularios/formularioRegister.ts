import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormularioRegister {

    form!:FormGroup;

    constructor(fb:FormBuilder){
        this.form = fb.group({
            name: ['', Validators.required],
            email:['', [Validators.required,Validators.email]],
            password:['',Validators.required]
        })
    }

}