function createImageWrapper(user) {
  const { id } = user;
  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', `wrapper${id}`);
  imageWrapper.classList.add('img-wrapper');
  imageWrapper.style.backgroundColor = stringToColour(getFullName(user));

  const initials = createElement(
    'div',
    { classNames: ['initials'] },
    document.createTextNode(getInitials(user))
  );

  createImage(user, { className: 'user-img' });
  imageWrapper.append(initials);
  return imageWrapper;
}