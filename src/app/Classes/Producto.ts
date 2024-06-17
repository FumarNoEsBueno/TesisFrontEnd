export class Producto {

  id: any;

  tipoProducto: any;
  nombre: any;
  imagenUrl: any;
  crystaldisk: any;
  esperanzaVida: any;
  horas: any;
  memoria: any;
  precio: any;
  marca: any;
  sistemaArchivos: any;
  tamano: any;
  tipo_entrada: any;
  descuento: any;

  descripcion: any;
  tipo_periferico: any;

  tipo_ram: any;
  tamano_ram: any;
  velocidad_ram: any;

  constructor(producto: any) {

    this.id = producto.id;
    this.descuento = producto.descuento_id;

    if(producto.ram_nombre != null){
      this.tipoProducto = "ram";
      this.nombre = producto.ram_nombre;
      this.imagenUrl = producto.ram_foto;
      this.precio = producto.ram_precio;
      this.marca = producto.marca_nombre;
      this.tipo_ram = producto.tipo_ram_nombre;
      this.velocidad_ram = producto.velocidad_ram_velocidad;
      this.tamano_ram = producto.tamano_ram_nombre;
    }

    if(producto.periferico_nombre != null){
      this.tipoProducto = "periferico";
      this.nombre = producto.periferico_nombre;
      this.imagenUrl = producto.periferico_foto;
      this.precio = producto.periferico_precio;
      this.marca = producto.marca_nombre;
      this.tipo_entrada = producto.tipo_entrada_nombre;
      this.tipo_periferico = producto.nombre_tipo_periferico;
    }

    if(producto.disco_duro_nombre != null){
      this.tipoProducto = "disco";
      this.nombre = producto.disco_duro_nombre;
      this.precio = producto.disco_duro_precio;
      this.marca = producto.marca_nombre;
      this.crystaldisk = producto.disco_duro_crystaldisk;
      this.imagenUrl = producto.disco_duro_foto;
      this.esperanzaVida = producto.disco_duro_esperanza_vida;
      this.horas = producto.disco_duro_horas_encendido;
      this.memoria = producto.disco_duro_memoria;
      this.sistemaArchivos = producto.sistema_archivos_nombre;
      this.tipo_entrada = producto.tipo_entrada;
      this.tamano = producto.tamano_nombre;
    }
  }

}
