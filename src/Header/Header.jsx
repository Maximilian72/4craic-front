import './Header.css';

function Header(props) {

  const boards = ['uni','pol','drnk','food','farm','law','cult', 'sprt','msc']
  const boardsList = boards.map((board)=><p>{board}</p>)
  const boardsListOutPut = []

  boardsListOutPut.push(<p>[</p>)
  var i
  for(i = 0; i <= boardsList.length-1; i++){
    boardsListOutPut.push(<a href="http://google.com">{boardsList[i]}</a>)
    boardsListOutPut.push(<p> / </p>)
  }
  boardsListOutPut.pop()
  boardsListOutPut.push(<p>]</p>)
  
  return (
    <div className='header'>
      <div className='boards'>{boardsListOutPut}</div>
      <p className='fourCraic'>4craic</p>
      <p className='board'>/{props.board}/ - {props.boardName}</p>
    </div>
  );
}

export default Header;