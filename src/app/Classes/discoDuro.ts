export class DiscoDuro {

  id: any;
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

  constructor(discoDuro: any) {

    this.id = discoDuro.id;
    this.nombre = discoDuro.disco_duro_nombre;
    this.imagenUrl = discoDuro.disco_duro_foto;
    this.crystaldisk = discoDuro.disco_duro_crystaldisk;
    this.esperanzaVida = discoDuro.disco_duro_esperanza_vida;
    this.horas = discoDuro.disco_duro_horas_encendido;
    this.memoria = discoDuro.disco_duro_memoria;
    this.precio = discoDuro.disco_duro_precio;
    this.marca = discoDuro.marca_nombre;
    this.sistemaArchivos = discoDuro.sistema_archivos_nombre;
    this.tamano = discoDuro.tamano_nombre;
  }

}
