const addMemberButton = document.querySelector('.add-member')
const ageInput = document.querySelector('.age-input')
const nameInput = document.querySelector('.name-input')

const addMember = async (event) => {
  event.preventDefault()


  const response = await fetch('/api/v1/fam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
  
}


addMemberButton.addEventListener('click', addMember)