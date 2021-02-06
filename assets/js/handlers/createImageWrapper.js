function createImageWrapper(user) {
  const { id } = user;
  const imageWrapper = createElement('div', {
    classNames: ['img-wrapper'],
    attributes: { id: `wrapper${id}` },
  });
  imageWrapper.style.backgroundColor = stringToColour(getFullName(user));

  const initials = createElement(
    'div',
    { classNames: ['initials'] },
    document.createTextNode(getInitials(user))
  );

  createImage(user, 'user-img');
  imageWrapper.append(initials);
  return imageWrapper;
}
