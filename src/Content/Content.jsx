import './Content.css';
import Facilities from './Facilities/Facilities'
import Posts from './Posts/Posts'
import PageNums from './PageNums/PageNums'

function Content() {

  return (
    <div className='content'>
      <Facilities />
      <Posts />
      <PageNums pageCount="12"/>
    </div>
  );
}

export default Content;