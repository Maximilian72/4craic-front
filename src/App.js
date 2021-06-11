import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import './App.css';

function App() {

  // const boards = ['uni','pol','drnk','food','farm','law','cult', 'sprt','msc']
  const board = {
    'board': 'uni',
    'name': 'University'
  }

  return (
    <div className='app'>
      <Header board={board.board} boardName={board.name}/> <br />
      <Content board={board.board}/> <br />
      <Footer /> 
    </div>
  );
}

export default App;
