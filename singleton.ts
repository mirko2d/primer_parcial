class Configuracion {
  private static instancia: Configuracion | null = null;
  private settings: Map<string, any> = new Map();

  private constructor() {}

  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  public set(key: string, value: any): void {
    this.settings.set(key, value);
  }

  public get(key: string): any {
    return this.settings.get(key);
  }
}

const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "producción");
console.log(conf2.get("modo"));