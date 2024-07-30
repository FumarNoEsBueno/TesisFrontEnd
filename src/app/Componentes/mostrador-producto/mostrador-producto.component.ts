import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Producto } from '../../Classes/Producto';
import { DropdownModule } from 'primeng/dropdown';
import { ComprasService } from '../../Services/compras.service';

@Component({
  selector: 'app-mostrador-producto',
  standalone: true,
  imports: [
    CarouselModule,
    CardModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    ImageModule
  ],
  templateUrl: './mostrador-producto.component.html',
  styleUrl: './mostrador-producto.component.css'
})


export class MostradorProductoComponent {

  constructor(private comprasService: ComprasService){}

  @Input() producto: any;
  @Input() clicable: boolean = true;
  @Input() home: boolean = false;

  @Output() agregarAlCarro = new EventEmitter<Producto>();
  @Output() homeDisplay = new EventEmitter<Producto>();

  visible = false;
  advertenciaVisible = false;
  cantidadProducto: any;
  productosRecomendados = [];

  ngOnInit(){
    if(this.producto.tipoProducto == "cable"){
      this.cantidadProducto = Array.from({ length: this.producto.cantidad }, (_, index) => index + 1);
    }
  }

  anadirAlCarrito(){
      if(this.producto.estado == "Por revisar" || this.producto.estado == "Para repuesto"){
        this.advertenciaVisible = true;
      }else{
        this.agregarAlCarro.emit(this.producto);
      }
  }

  mostrarDetalles(){
    this.visible = this.clicable && !this.home;
    this.homeDisplay.emit(this.producto);
    this.getProductosRecomendados();
  }

  getProductosRecomendados(){
    if(this.producto.tipoProducto != "disco") return;
    this.comprasService.getCablesRecomendados(this.producto.tipo_entrada).subscribe({
      next: (res: any) => {
        this.productosRecomendados = res.map((item: any) => new Producto(item));
      }
    });
  }

  confirmarAnadir(){
      this.advertenciaVisible = false;
      this.agregarAlCarro.emit(this.producto);
  }

  cancelarAnadir(){
    this.advertenciaVisible = false;
  }

  agregarRecomendado(producto: any){
    this.agregarAlCarro.emit(producto);
  }

}
