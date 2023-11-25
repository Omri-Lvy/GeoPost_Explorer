const url = 'https://jsonplaceholder.typicode.com/'

export const getAllPosts = async () => {
  const response = await fetch(`${url}/posts`);
  return await response.json();
}

export const getPostByAuthorIds = async (ids) => {
  const userIds = ids.join('&userId=');
  const response = await fetch(`${url}/posts?userId=${userIds}`);
  return await response.json();
}

export const getUsers = async () => {
  const response = await fetch(`${url}/users`);
  const users = await response.json();
  const usersMap = {};
  users.forEach((user) => {
    usersMap[user.id] = user;
  });
  return usersMap;
}
