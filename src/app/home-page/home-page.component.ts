import { Component, EventEmitter, Output } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { LoginServiceService } from '../Services/login-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ComprasService } from '../Services/compras.service';
import { Producto } from '../Classes/Producto';
import { CarouselModule } from 'primeng/carousel';
import { MostradorProductoComponent } from '../Componentes/mostrador-producto/mostrador-producto.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  providers: [MessageService],
  imports: [ImageModule,
    DialogModule,
    MostradorProductoComponent,
  CarouselModule],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private loginService: LoginServiceService,
              private router: Router,
              private messageService: MessageService,
              private compraService: ComprasService){}

  productos = [];
  producto: any;
  productosRecomendados = [];
  visible: boolean = false;

  @Output() agregarAlCarroOutput = new EventEmitter<Producto>();

  ngOnInit(){
    this.getProductos();
  }

  getProductos(){
    this.compraService.getProductosNuevos().subscribe({
      next: (res: any) => {
        this.productos = this.productos.concat(res[0].map((item: any) => new Producto(item)));
        this.productos = this.productos.concat(res[1].map((item: any) => new Producto(item)));
        this.productos = this.productos.concat(res[2].map((item: any) => new Producto(item)));

        this.productos = this.shuffle(this.productos);
      }
    });
  }

  shuffle(array: any){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  agregarAlCarro(producto: Producto){
    this.agregarAlCarroOutput.emit(producto);
  }

  loadProducto(producto: any){
    this.producto = producto;
    this.visible = true;
    this.getProductosRecomendados();
  }

  getProductosRecomendados(){
    if(this.producto.tipoProducto != "disco") return;
    this.compraService.getCablesRecomendados(this.producto.tipo_entrada).subscribe({
      next: (res: any) => {
        this.productosRecomendados = res.map((item: any) => new Producto(item));
      }
    });
  }
}
