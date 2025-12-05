import { createSignal } from "solid-js";

export default function CepForm(props) {
    const [cep, setCep] = createSignal("");

    const submit = (e) => {
        e.preventDefault();
        if (cep().trim() !== "") props.onBuscar(cep());
    };

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="Digite o CEP"
                value={cep()}
                onInput={(e) => setCep(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    );
}
