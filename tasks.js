// 1. Write a program to find the number of posts written by each user. Consider below array and
// prepare the given output by counting the number of posts written by each user.

    var posts =[
        {userId:1, postName:"post1"},
        {userId:2, postName:"post2"},
        {userId:3, postName:"post3"},
        {userId:1, postName:"post4"},
        {userId:1, postName:"post5"},
        {userId:2, postName:"post6"},
        {userId:1, postName:"post7"},
        {userId:2, postName:"post8"},
        {userId:3, postName:"post9"},
 ];





    let userCounts = {};

    posts.forEach(function(post) {
      if (userCounts[post.userId] === undefined) {
        userCounts[post.userId] = 0;
      }
      userCounts[post.userId]++;
      
    
    });
console.log(userCounts)

// console.log(result.map(e=>({userId:e,postCount:userCounts[e]})))




