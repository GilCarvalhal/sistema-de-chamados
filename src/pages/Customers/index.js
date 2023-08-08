import Header from '../../components/Header'
import Title from '../../components/Title'
import { useState } from 'react'
import { FiUser } from 'react-icons/fi'

export default function Customers() {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    function handleRegister(e) {
        e.preventDefault();

        alert("TESTE");
    }

    return (
        <div>
            <Header />
            <div className='content'>
                <Title name='Clientes'>
                    <FiUser size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleRegister}>
                        <label>Nome fantasia</label>
                        <input type='text' placeholder='Nome da empresa' value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label>CNPJ</label>
                        <input type='text' placeholder='CNPJ da empresa' value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <label>Endereço</label>
                        <input type='text' placeholder='Endereço da empresa' value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}