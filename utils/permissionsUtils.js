export const hasPermission = (currentUser, requiredPermission) => {
  return currentUser.permissions.includes(requiredPermission);
};
