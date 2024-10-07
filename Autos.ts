export class Auto {
    private marca: string;
    private modelo: number;
    private patente: string;

     constructor (marca: string, modelo: number, patente: string){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }


//Getters 
public getMarca(): string {
    return this.marca;
}
public getModelo(): number {
    return this.modelo;
}
public getPatente(): string {
    return this.patente;
}

//Setters
public setMarca(marca: string): void {
    this.marca = marca;
}

public setModelo(modelo: number): void {
    this.modelo = modelo;
}
public setPatente(patente: string): void {
    this.patente = patente;
}


}