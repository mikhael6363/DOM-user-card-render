function createImage(user, ...imgClassName) {
  const { id, profilePicture } = user;
  const img = createElement('img', {
    classNames: imgClassName,
    attributes: { src: profilePicture, alt: getFullName(user) },
  });
  img.dataset.id = id;
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);
  return img;
}
