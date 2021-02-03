function createSocialLinks({ contacts } = []) {
  return contacts
    .map((contactLink) => {
      return createElement(
        'a',
        {
          classNames: ['social-link'],
          attributes: { href: contactLink, target: '_blank' },
        },
        createElement('i', {
          classNames: [
            'fab',
            SOCIAL_LINKS_MAP.get(new URL(contactLink).hostname),
          ],
        })
      );
    })
    .filter(Boolean);
}