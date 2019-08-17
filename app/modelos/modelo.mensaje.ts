export class Mensaje 
{
  //Propiedades
  public codigo: string;
  public mensaje: string;
 
  //Constructor
  constructor( codigo:string, mensaje:string ) 
  {
    this.codigo = codigo;
    this.mensaje = mensaje;
  }
}