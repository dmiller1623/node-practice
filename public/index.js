const addMemberButton = document.querySelector('.add-member')

const addMember = (event) => {
  event.preventDefault()
  console.log('hey')
}


addMemberButton.addEventListener('click', addMember)