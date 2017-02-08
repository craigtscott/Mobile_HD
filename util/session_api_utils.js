export const signup = (user) => {
  return $.ajax({
      type: 'POST',
      url: 'http://www.hd-list.com/api/users',
      data: { user }
  });
};

export const login = (user) => {
  return $.ajax({
      type: 'POST',
      url: 'http://www.hd-list.com/api/session',
      data: { user }
  });
};

export const logout = () => {
  return $.ajax({
      type: 'DELETE',
      url: 'http://www.hd-list.com/api/session'
  });
};
