(function(){
    
    const posts = [
        {title: 'post one',body :'this is post one '},
        {title: 'post two',body :'this is post two'}
    ]
    function getPost(){
        setTimeout(()=>{
            let output = '';
            posts.forEach((post,index)=>{
                output +=`<li>${post.title}</li>`;

            });
            document.body.innerHTML = output;
        },1000)
    }

  function  createPost(post){

      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Not ok');

            }
        },2000)
      });
       
    
}   
    getPost();
    createPost({title: 'post three',body :'this is post three '})
    .then(getPost)
    .catch(err=>console.log(err));
})()