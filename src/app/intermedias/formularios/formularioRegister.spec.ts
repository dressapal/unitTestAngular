import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formularioRegister"

describe('Formularios',()=>{

     let componente:FormularioRegister;

     beforeEach(()=> {
        componente = new FormularioRegister(new FormBuilder());
     })

     it('debe de crear un formulario con dos campos', ()=>{
        expect(componente.form.contains('email')).toBeTruthy()
        expect(componente.form.contains('password')).toBeTruthy()
     })

     it('email debe ser un email obligatorio', ()=> {

        const control = componente.form.get('email');

        control?.setValue('');

        expect(control?.valid).toBeFalsy()

     })



     it('email debe ser un email valido', ()=> {

        const control = componente.form.get('email');

        control?.setValue('gatitos@gmail.com');

        expect(control?.valid).toBeTruthy()

     })

     it('should initialize the form with empty fields', () => {
      expect(componente.form.value).toEqual({ name: '', email: '', password: '' });
    });


    it('should set name field as invalid if left empty', () => {
      const nameControl = componente.form.get('name');
      if (nameControl) {
        nameControl.setValue('');
        expect(nameControl.valid).toBeFalsy();
      } else {
        fail('Name control is null');
      }
    });
    
    it('should set email field as invalid if left empty', () => {
      const emailControl = componente.form.get('email');
      if (emailControl) {
        emailControl.setValue('');
        expect(emailControl.valid).toBeFalsy();
      } else {
        fail('Email control is null');
      }
    });
    
    it('should set email field as invalid if email format is incorrect', () => {
      const emailControl = componente.form.get('email');
      if (emailControl) {
        emailControl.setValue('invalidemail');
        expect(emailControl.valid).toBeFalsy();
      } else {
        fail('Email control is null');
      }
    });
    
    it('should set email field as valid if email format is correct', () => {
      const emailControl = componente.form.get('email');
      if (emailControl) {
        emailControl.setValue('valid@example.com');
        expect(emailControl.valid).toBeTruthy();
      } else {
        fail('Email control is null');
      }
    });



})