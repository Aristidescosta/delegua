export function inferirTipoVariavel(
    variavel: string | number | Array<any> | boolean | null | undefined
) {
    const tipo = typeof variavel;
    switch (tipo) {
        case 'string':
            return 'texto';
        case 'number':
            return 'número';
        case 'bigint':
            return 'longo';
        case 'boolean':
            return 'lógico';
        case 'undefined':
            return 'nulo';
        case 'object':
            // Variável pode ser vetor ou dicionário.
            if (Array.isArray(variavel))
                return 'vetor';
            return 'dicionário';
        case 'function':
            return 'função';
        case 'symbol':
            return 'símbolo';
    }
}