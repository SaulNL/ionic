import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ModalController } from '@ionic/angular';
import { ModalDetalleComponent } from '../components/modal-detalle/modal-detalle.component';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  listausuarios: any[] = [];

  constructor(private modalCtrl: ModalController, private _usuariosService: ProductosService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this._usuariosService.obtenerUsuarios().subscribe({
      next: (value) => {
        this.listausuarios = value;
        console.log('listausuarios:',value);
      },
      error: (err) => {
        console.log('Error al obtener usuarios:', err);
      },
       complete:()=>{
//ionic g c components/modal-detalle categoria
       }
    })
  }

  async abrirModalDetalle(item: any){
    const modal = await this.modalCtrl.create({
      component: ModalDetalleComponent,
      componentProps: {
        usuarios: item
        }
    });
    modal.present();
  }
}
