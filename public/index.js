const addMemberButton = document.querySelector('.add-member')
const ageInput = document.querySelector('.age-input')
const nameInput = document.querySelector('.name-input')


const getAllMembers = async () => {
  const response = await fetch('/api/v1/fam');
  const familyMembers = await response.json();
  console.log(familyMembers)

}

const addMember = async (event) => {
  event.preventDefault()
  let newMember = {
    name: nameInput.value,
    age: parseInt(ageInput.value)
  }

  console.log(newMember)
  try {
    const response = await fetch('/api/v1/fam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMember)
    })
    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}

getAllMembers();

addMemberButton.addEventListener('click', addMember)