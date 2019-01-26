// const addMemberButton = document.querySelector('.add-member')
// const ageInput = document.querySelector('.age-input')
// const nameInput = document.querySelector('.name-input')


let family = []


const getAllMembers = async () => {
  const response = await fetch('/api/v1/fam');
  const familyMembers = await response.json();
  family = familyMembers
  displayMembers();
}

const displayMembers = () => {
  let familySection = $('.family')
  family.forEach((member, index) => {
    familySection.append(`<h1>Age ${member.age}</h1><h1 id=${member.id}>${member.name}</h1></h1><button class='delete-button'>delete</button>`)
  })
}

const addMember = async (event) => {
  event.preventDefault()
  let name = $('.name-input').val();
  let age = $('.age-input').val();
    let newMember = {
    name,
    age
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

const deleteMember = async (event) => {
  if(event.target.className === 'delete-button') {
    let memberId = event.target.previousSibling.id;

    try {
      await fetch(`/api/v1/fam/${memberId}`, {
        method: 'DELETE'
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

getAllMembers();

$('.add-member').on('click', addMember)
$('.family').on('click', deleteMember)
// addMemberButton.addEventListener('click', addMember)