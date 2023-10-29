import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="action">
            <button type="button">Voltar</button>
            <button type="submit">Avançar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
