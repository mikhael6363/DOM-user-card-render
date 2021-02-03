function getFullName({ firstName, lastName }) {
  if (firstName && lastName) {
    return `${firstName.trim()} ${lastName.trim()}`;
  } else {
    return '';
  }
}

function getInitials({ firstName, lastName }) {
  if (firstName && lastName) {
    return `${firstName.trim().charAt(0)} ${lastName.trim().charAt(0)}`;
  } else {
    return '';
  }
}
