import { createSignal } from "solid-js";

export default function CepCard(props) {
    const [editando, setEditando] = createSignal(false);
    const [dados, setDados] = createSignal(props.dados);

    const atualizar = (campo, valor) => {
        setDados({ ...dados(), [campo]: valor });
    };

    return (
        <div style={{ border: "1px solid #999", padding: "10px", marginTop: "10px" }}>
            {editando() ? (
                <>
                    <div>
                        <label>Logradouro: </label>
                        <input
                            value={dados().logradouro}
                            onInput={(e) => atualizar("logradouro", e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Bairro: </label>
                        <input
                            value={dados().bairro}
                            onInput={(e) => atualizar("bairro", e.target.value)}
                        />
                    </div>

                    <button onClick={() => setEditando(false)}>Salvar</button>
                </>
            ) : (
                <>
                    <p><strong>CEP:</strong> {dados().cep}</p>
                    <p><strong>Logradouro:</strong> {dados().logradouro}</p>
                    <p><strong>Bairro:</strong> {dados().bairro}</p>
                    <p><strong>Cidade:</strong> {dados().localidade} - {dados().uf}</p>

                    <button onClick={() => setEditando(true)}>Editar</button>
                    <button onClick={() => props.onExcluir(dados().cep)}>Excluir</button>
                </>
            )}
        </div>
    );
}
