import React from 'react'

const TRANSformacao = () => {
    return (
    <div>
        <h2>TRANSformação</h2>
        <div className="form-control">
            <label htmlFor="name">Nome e Sobrenome: </label>
            <input type="text" name="nomeSobre" id='nomeSobre' maxLength="20" placeholder='Digite aqui' required/>
        </div>

        <div className="form-control">
            <label htmlFor="name">Nome Social: </label>
            <input type="text" name="nameSocial" id='nameSocial' placeholder='Digite aqui' required/>
        </div>

        <div className="form-control">
            <label htmlFor="sexo">Gênero: </label>
            <select name="assunto" id="opcoes">
                <option disabled="dissabled" selected="selected">-- Selecione a opção</option>
                <option>Mulher (Trans ou Cis)</option>
                <option>Homer (Trans ou Cis)</option>
                <option>Gênero Não-Binário</option>
            </select>
        </div>

        <div className="form-control">
            <label htmlFor="name">CPF: </label>
            <input type="text" name="cpf" id='campo_cpf' size='11'maxLength='11' placeholder='Digite seu CPF aqui' required/>
        </div>

        <div className="form-control">
            <label htmlFor="name">Idade: </label>
            <input type="number" name="quantidade" id='idade' min="15" max="99" required/>
        </div>

        <div className="form-control">
            <label htmlFor="email">E-mail: </label>
            <input type="email" name="email" id='email' size="40" placeholder='seuemail@email.com' required/>
        </div>

        <div className="form-control">
        <label htmlFor="contato">Contato: </label>
            <label htmlFor="codigo">DDD </label>
            <input type="text" name="codigo_area" id='DDD' size="2" maxLength="2" placeholder='xx' required/> 
            <label htmlFor="celular">Celular </label>
            <input type="text" name="number" id='celular' size="9" maxLength="9" placeholder='xxxxx-xxxx' required/>
        </div>
        
    </div>
  )
}

export default TRANSformacao
