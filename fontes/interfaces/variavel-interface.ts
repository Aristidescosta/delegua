import { TIPO_NATIVO } from "../interpretador";

export interface VariavelInterface {
    valor: any;
    tipo:
        | 'texto'
        | 'número'
        | 'longo'
        | 'vetor'
        | 'dicionário'
        | 'nulo'
        | 'lógico'
        | 'função'
        | 'símbolo'
        | 'objeto'
        | 'módulo'
        | TIPO_NATIVO
    subtipo?: 'texto' | 'número' | 'longo' | 'lóg ico';
    imutavel: boolean;
    nomeReferencia?: string;
}
