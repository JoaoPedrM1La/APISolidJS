export async function buscarCEP(cep) {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!res.ok) throw new Error("Erro ao buscar CEP");

    const dados = await res.json();
    if (dados.erro) throw new Error("CEP não encontrado");
    return dados;
}
