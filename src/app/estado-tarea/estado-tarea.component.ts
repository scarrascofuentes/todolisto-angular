import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-estado-tarea',
  templateUrl: './estado-tarea.component.html',
  styleUrls: ['./estado-tarea.component.css']
})
export class EstadoTareaComponent implements OnInit {

  constructor(private http: HttpClient) { }


  url_estados: string = "http://localhost:8000/estados";
  id: number;
  nombre: String;
  estado: any;


  getEstados() {
    return this.http.get(`${this.url_estados}`).subscribe(data => {
      console.log(data);
      this.estado = data;
    });
  }

  toString() {
    return `Estado #${this.id}: ${this.nombre}`;
  }

  ngOnInit() {

    this.getEstados();
  }

}
