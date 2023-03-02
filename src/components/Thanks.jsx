import React from 'react';

const Thanks = () => {
    return (
    <div>
        <div className="form-control">
            <label htmlFor="DataHora">Data e Horário </label>
            <input type="datetime-local" name="daytime" id='daytime' required/>
        </div>
        <div className="checkbox">
            <input type="checkbox" name="checkbox" id='daytime' required/> <label>
            <span class="check_new_btn">Ative para receber promoção e informação do nosso serviço.</span>
            </label>
        </div>
        <div className="form-control"><br/>
            <label htmlFor="mensagem">Comentário:</label>
            <textarea name='mensagem' placeholder='Digite aqui sua sua mensagem! 😉'></textarea>
        </div>
    </div>
    );
};

export default Thanks;
