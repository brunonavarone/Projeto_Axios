import React from 'react';

const Thanks = () => {
    return (
    <div>
        <div className="form-control">
            <label htmlFor="DataHora">Data e Horário </label>
            <input type="datetime-local" name="daytime" id='daytime' required/>
        </div>
        <div className="form-control">
            <p></p>
            <label htmlFor="legenda">
            <input type="checkbox" name="" id='daytime' required/>
            Ative para receber promoções e informações do nosso serviço
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="mensagem">Comentário:</label><br />
            <textarea name='mensagem' placeholder='Deixa seu feedback! 😉'></textarea>
        </div>
    </div>
    );
};

export default Thanks;
