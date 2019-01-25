const addMemberButton = document.querySelector('.add-member')
const ageInput = document.querySelector('.age-input')
const nameInput = document.querySelector('.name-input')

let family = []


const getAllMembers = async () => {
  const response = await fetch('/api/v1/fam');
  const familyMembers = await response.json();
  family = familyMembers
  displayMembers();
}

const displayMembers = () => {
  const familySection = $('.family')
  family.forEach((member, index) => {
    console.log(member)
    familySection.append(`<h1>${member.name}</h1><button>delete</button>`)
  })
}

const addMember = async (event) => {
  event.preventDefault()
  let newMember = {
    name: nameInput.value,
    age: parseInt(ageInput.value)
  }
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