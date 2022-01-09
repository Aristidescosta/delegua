import { Expr } from "./expr";


export class Atribuir extends Expr {
    nome: any;
    valor: any;

    constructor(nome: any, valor: any) {
        super();
        this.nome = nome;
        this.valor = valor;
    }

    aceitar(visitor: any) {
        return visitor.visitAssignExpr(this);
    }
}
