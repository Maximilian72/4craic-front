import './Posts.scss';

function Comments(props){
  
  const commentsList = props.comments.map((comment) =>
    <div className="comment">

      <div className="commentDetails">
        <p className="commentDate">{comment.date}</p>
        <p className="commentNumber">{comment.id}</p>
      </div>

      <div className="commentAndImage">

        {comment.image !== ""
          ?  <img className="commentImage" src={comment.image} alt="Special meme fresh!"/>
          : <></>
        }

        <p className="commentBody">{comment.message}</p>
      
      </div>
    
    </div>
  )

  return commentsList
  
}

function Post(props){
  const commentCount = props.firstComments.length
  return (
    <div className='post'>

      <img className="postImage" src={props.image} alt="I could not be one bit bothered"/>

      <div className="postAndComment">

        <div className="postText">
          <p className="postTitle">{props.title}</p>

          <div className="postDetails">
            <p className="postDate">{props.date}</p>
            <p className="postNumber">{props.id}</p>
          </div>

          <p className="postBody">{props.message}</p>
        </div>

        <div className="postComments">
          <Comments comments={props.firstComments}/>
        </div>

        <p className="openThread">Post has {commentCount} comments. <a>CLICK HERE</a> to open thread.</p>

      </div>

    </div>
  )
}

function Posts(){

  const  postsObj = [
      {
        'title': 'Special Meme',
        'message': 'Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. Special meme fresh what is the happening. ',
        'date': '03/04/1978',
        'id': '#234443',
        'image': '/logo192.png',
        'firstComments':[
          {
            'message': 'I did indeed buy BITCOIN',
            'date': '05/02/1955',
            'id': '#567543',
            'image': '',
          },
          {
            'message': 'I did indeed buy BITCOIN',
            'date': '05/02/1955',
            'id': '#567543',
            'image': '',
          },
          {
            'message': 'I did indeed buy BITCOIN',
            'date': '05/02/1955',
            'id': '#567543',
            'image': '/logo192.png',
          }
        ]
      },
      {
        'title': 'Special Meme',
        'message': 'Special meme fresh what is the happening.',
        'date': '03/04/1978',
        'id': '#234443',
        'image': '/logo192.png',
        'firstComments':[]
      },
      {
        'title': 'Special Meme',
        'message': 'Special meme fresh what is the happening.',
        'date': '03/04/1978',
        'id': '#234443',
        'image': '/logo192.png',
        'firstComments':[]
      },
      {
        'title': 'Special Meme',
        'message': 'Special meme fresh what is the happening.',
        'date': '03/04/1978',
        'id': '#234443',
        'image': '/logo192.png',
        'firstComments':[]
      },
      {
        'title': 'Special Meme',
        'message': 'Special meme fresh what is the happening. ',
        'date': '03/04/1978',
        'id': '#234443',
        'image': '/logo192.png',
        'firstComments':[]
      }
        
  ]

    const posts = postsObj
    const postsList = posts.map((post)=>

      <Post image={post.image} title={post.title} id={post.id} date={post.date} message={post.message} firstComments={post.firstComments}/>

    )
    return(
        <div className='posts'>
            {postsList}
        </div>
    )
}

export default Posts;