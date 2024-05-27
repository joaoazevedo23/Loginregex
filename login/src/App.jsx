import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Body">
      <div className="container">

        <div className="h2"><h2 className='h2'>Login</h2></div>

        <div className="form">
          <div className="itens">
            <p>Email:</p>
            <input type='email' className='input' placeholder='Ex: exemplo@exemplo.com'></input>
          </div>

          <div className="itens">
            <p>Password:</p>
            <input type='password' className='input' placeholder='Ex: 12345!AB'></input>
          </div>
        </div>
        <button className="btn">Open</button>

        <p>Do you need help? enter in:</p>

        <div className="help">
          <a href="https://www.help.com.br/">https://www.help.com.br/</a>
        </div>
        
        <img src='https://static.vecteezy.com/system/resources/previews/017/745/722/original/illustration-cartoon-rocket-cute-rocket-cartoon-vector-start-up-free-png.png'></img>
      </div>
      
    </div>
  );
}

export default App;
