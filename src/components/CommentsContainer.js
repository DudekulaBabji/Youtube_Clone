import React from 'react'

const commentsData= [
    {
        name:"Babji",
        text: "Nice Movie",
        replies:[
             {
        name:"Ravi",
        text: "Yes",
        replies:[]
    }, {
        name:"Hari",
        text: "Watching daily",
        replies:[]
    },
        ]
    },
     {
        name:"Babji",
        text: "Lorem",
        replies:[]
    },
     {
        name:"Babji",
        text: "Lorem",
        replies:[]
    },
];

const Comment =({data})=>{
    const {name, text, replies} = data;
    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img  className="w-12 h-12" alt='user' src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"  />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
    )

}
const CommentsList =({comments})=>{
    return comments.map((comment, index)=> (
        <div key={index}>
            <Comment  data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
        
    ));
};

    



const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer