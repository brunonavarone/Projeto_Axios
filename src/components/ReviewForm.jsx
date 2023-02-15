import React from 'react';

const ReviewForm = () => {
    return (
    <div>
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
        <div className= "form-control">
            <label htmlFor="sexo">Gênero: </label>
            <select name="assunto" id="opcoes">
                <option disabled="dissabled" selected="selected">-- Selecione a opção</option>
                <option>Mulher (Trans ou Cis)</option>
                <option>Homer (Trans ou Cis)</option>
                <option>Gênero Não-Binário</option>
            </select>
        </div>
    </div>
    );
}

export default ReviewForm;
