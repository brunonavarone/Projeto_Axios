//Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';
import UserForm from "../components/UserForm";
import ReviewForm from '../components/ReviewForm';
import Thanks from '../components/Thanks';
import Steps from '../components/Steps';

//Hooks
import { useForm } from '../hooks/useForm';
import { useState } from 'react';


import './Formulario.css';

function App() {
  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2><strong>Realce o que já <i>é belo em Você</i></strong></h2>
      </div>
      <div className="form-container">
        <p>Cadastra-se e Agenda!</p>
        <Steps currentStep = { currentStep } />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Volta</span>
            </button>
            )}
            {!isLastStep ? (
              <button type="submit">
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ) : (
              <button type="button">
              <FiSend/>
              <span>Enviar</span>
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
