import './PageNums.css';

function PageNums(props){
    const pageCount = props.pageCount
    const pageNumList = []
    
    var i = 0;
    for(i; i <= pageCount-1; i++){
        pageNumList.push(<a href="http://google.com">[{i+1}] </a>)
    }

    return(
        <div className='pageNums'>
            {pageNumList}
        </div>
    )
}

export default PageNums;