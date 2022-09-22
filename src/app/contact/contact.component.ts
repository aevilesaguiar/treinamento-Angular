import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
//este é o modelo que vai hospedar o formulário reactive
feedbackForm: FormGroup;

feedback: Feedback;//mas tarde esse valor pode ser obtido a partir de um servidor dentro da nossa aplicação
contactType = ContactType;


  constructor(private fb: FormBuilder) {
    this.creatForm();

  }

  ngOnInit(): void {
  }

  creatForm(){
    this.feedbackForm=this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: true,
      contacttipe:'None',
      message: ''
    })

  }

  onSubmit(){
    //value permite recuperar o valor atual
    //feedbackForm.value; mapeio para o objeto js feedback
    //se analisarmos feedback e  e feedbackForm ambos tem a mesma estrutura o modelo de dados
    //e o modelo de formulário, por isso que eu carrego  rapidamente o valor diretamente no modelo de dados
    //quando o ususario envia o formulário
    this.feedback = this.feedbackForm.value;

      //só para confirmar que o form foi enviado corretamente
      console.log(this.feedback);

      //o método reset permite que vc redefina o form para seu estado normal
      //removendo todas as entrads que vc fez
      this.feedbackForm.reset();

  }

}
