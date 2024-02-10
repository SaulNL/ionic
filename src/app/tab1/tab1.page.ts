import { Component, OnInit} from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ModalDetalleComponent } from '../components/components/modal-detalle/modal-detalle.component';
import { ModalController } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private modalCtrl: ModalController, private _categoriasService: ProductosService) {}

  listacategorias: any[] = [];

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this._categoriasService.obtenerCategorias().subscribe({
      next: (value) => {
        this.listacategorias = value;
        console.log('listacategorias:', value);
      },
      error: (err) => {
        console.log('Error al obtener categorías:', err);
      },
       complete:()=>{

       }
    })
  }
  async abrirModalDetalle(item: any){
    const modal = await this.modalCtrl.create({
      component: ModalDetalleComponent,
      componentProps: {
        categoria: item
        }
    });
    modal.present();
  }

  compartirCategoria(item: any){
    Share.share({
      title: item.mane,
      text: item.id,
      url: item.image,
    //  url: 'http://bituyu.com.mx/',
      
    });
  }
}
