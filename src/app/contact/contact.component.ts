import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  telefono = "2942-691102";
  email = "rodrigo11.funes@hotmail.com";
  github = "github.com/rodrigo-funes-biasatti";
  linkedin = "www.linkedin.com/in/rodrigo-funes-biasatti-506219206/";

  constructor() { }

  ngOnInit(): void {
  }

}
