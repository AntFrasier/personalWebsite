const MyPost = ({h1, content} : {h1:string, content:string}) => { //language : Locale,
  
    return (
        <>  
            <h1>{h1}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}

export default MyPost