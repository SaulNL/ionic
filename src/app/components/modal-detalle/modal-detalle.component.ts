import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss'],
})
export class ModalDetalleComponent  implements OnInit {

  @Input() usuarios: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
     console.log(this.usuarios)
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
