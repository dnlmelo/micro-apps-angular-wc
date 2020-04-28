import { Component, OnInit } from '@angular/core';

interface Balance{
  date:string,
  name:string,
  value:number,
  resume?:boolean,
  out?:boolean
}

const extract:Balance[] = [
  {date: '28/04', name: 'Saldo do Dia', value: 2000.00, resume: true},
  {date: '27/04', name: 'INT PAG TIT BANCO 237', value: -1400.00, out: true},
  {date: '27/04', name: 'Saldo do Dia', value: 3400.00, resume: true},
  {date: '26/04', name: 'TAR PACOTE ITAU MAR/20', value: -34.35, out:true},
  {date: '26/04', name: 'Saldo do Dia', value: 3434.35, resume: true},
]

@Component({
  selector: 'app-extrato-list',
  templateUrl: './extrato-list.component.html',
  styleUrls: ['./extrato-list.component.css']
})
export class ExtratoListComponent implements OnInit {

  constructor() { }
  extract:Balance[] = extract;

  ngOnInit(): void {
    
  }

}
