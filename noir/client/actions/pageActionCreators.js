export function increamentLikes(index) {
  return {
    type: 'INCREAMENT_LIKES',
    index
  }
}

export function addPage(link, title, body_text, replies, replied_from) {
  return {
    type: 'ADD_PAGE',
    link,
    title,
    body_text,
    replies,
    replied_from
  }
}

export function removePage(link, i) {
  return {
    type: 'REMOVE_PAGE',
    link,
    i
  }
}

export function reply(link, replied_from) {
  return {
    type: 'REPLY',
    link,
    replied_from
  }
}

export function setPartner(replied_from) {
  return {
    type: 'SET_PARTNER',
    replied_from
  }
}
