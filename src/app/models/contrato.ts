export class Contrato {
    identificador?: number | null;
    valor?: number | null;
    nombreContratante?: string | null;
    documentoContratante?: string | null;
    nombreContratista?: string | null;
    documentoContratista?: string | null;
    fechaInicial?: Date | null;
    fechaFinal?: Date | null;

    constructor(
        identificador?: number | null,
        valor?: number | null,
        nombreContratante?: string | null,
        documentoContratante?: string | null,
        nombreContratista?: string | null,
        documentoContratista?: string | null,
        fechaInicial?: Date | null,
        fechaFinal?: Date | null
    ) {
        this.identificador = identificador;
        this.valor = valor;
        this.nombreContratante = nombreContratante;
        this.documentoContratante = documentoContratante;
        this.nombreContratista = nombreContratista;
        this.documentoContratista = documentoContratista;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
    }
}
