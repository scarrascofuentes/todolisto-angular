import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of, empty } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url_tareas: string = "http://localhost:8000/tareas";


  constructor(private http: HttpClient) { }

  tareas: Array<Tarea> = [
    new Tarea(1, 'Comprar leche', 'Y pañales para el bebe', 'null', 'null'),
    new Tarea(2, 'Hacer Taller Angular', 'Falta empezar...', 'null', 'null'),
    new Tarea(3, 'Preparar papers', 'Por fin','null', 'null')
  ];

  getTareas()  {
    return this.http.get(`${this.url_tareas}`)
  }
 
  crearTarea(tarea: Object) {
    return this.http.post(`${this.url_tareas}`, tarea)
  }

  updateOrganizacion(organizacion: Object, id: String) {
    return this.http.put(`${this.url_tareas}/${id}`, organizacion)
  }

  deleteOrganizacion(id: String) {
    return this.http.delete(`${this.url_tareas}/${id}`)
  }


  // crearTarea(t: Tarea): Observable<any> {
  //   // Obtener maximo id en this.tareas e incrementar en 1 para el nuevo id
  //   const newId = Math.max.apply(null, this.tareas.map(x => x.id)) + 1;
  //   // Insertar en el 'backend' la nueva tarea con el id generado y sus atributos
  //   this.tareas.push(new Tarea(newId, t.titulo, t.descripcion));
  //   // Se retorna un observable vacío solamente para seguir usando observables
  //   return empty();
  // }

  // getTareas(): Observable<any> {
  //   return of(this.tareas);
  // }


}
