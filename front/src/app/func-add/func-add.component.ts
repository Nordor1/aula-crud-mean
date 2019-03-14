import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css']
})
export class FuncAddComponent implements OnInit {

  adicionarFuncionarioForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.createForm();
  }

  /**
   * Método responsável por tratar as validações
   * do Form que criará um novo Funcionario
   */
  createForm() {
    this.adicionarFuncionarioForm = this.formbuilder.group({
      nomeFuncionario: ['', Validators.required],
      cargo: ['', Validators.required],
      numeroidentificador: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

}
