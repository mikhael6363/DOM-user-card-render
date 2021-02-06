'use strict';

const cardsContainer = document.getElementById('user-cards-container');
const data1 = fetch('./assets/js/data/users.json')
  .then((response) => response.json())
  .then((data) => {
    cardsContainer.append(...data.map((user) => createUserCards(user)));
  })
  .catch(() => new Error('Data is not received!'));

function createUserCards(user) {
  return createElement(
    'article',
    { classNames: ['user-card'], onClick: createSelection },
    createImageWrapper(user),
    createElement(
      'div',
      { classNames: ['content-wrapper'] },
      createElement('h3', { classNames: ['user-name'] }, getFullName(user)),
      createElement(
        'p',
        { classNames: ['user-description'] },
        document.createTextNode(USER_DESCRIPTION)
      ),
      createElement(
        'div',
        { classNames: ['social-links-wrapper'] },
        ...createSocialLinks(user)
      )
    )
  );
}
