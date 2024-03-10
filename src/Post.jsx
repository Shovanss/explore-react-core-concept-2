export default function Post({post}){
    const {userId,id,title,body} = post;
    return(
        <div className="box">
            <h3>Title : {title}</h3>
            <p><small>userId : {userId}</small></p>
            <p><small>id : {id}</small></p>
            <p>{body}</p>
        </div>
    )

}