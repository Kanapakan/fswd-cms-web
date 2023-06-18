


export const getPosts = async () => {
    const result = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/?_embed')
  
    return result.json();
}

export const getPostDetails = async ( postId ) => {
    const result = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${postId}` )
    console.log("result", postId, result);
  
    return result.json();
}


export const getUsers = async () => {
  const result = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users')

  return result.json();
}

export const getUserDetails = async ( userId ) => {
    const result = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${userId}`)
  
    return result.json();
  }

export const getCategories = async () => {
    const result = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories')
  
    return result.json();
  }