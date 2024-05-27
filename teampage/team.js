const teamMembers = [
    { name: "Member 1", role: "Yishan Luo", imageUrl: "assets/Yishan_Luo.jpg" },
    { name: "Member 4", role: "Sabrina Lynch", imageUrl: "assets/Sabrina_Lynch.jpg" },
    { name: "Member 5", role: "Leilia Lin", imageUrl: "assets/Leilia_Lin.jpg" },
    { name: "Member 2", role: "Elaine Lin", imageUrl: "assets/Elaine_Lin.jpg" },
    { name: "Member 6", role: "Julia Ma", imageUrl: "assets/Julia_Ma.jpg" },
    { name: "Member 5", role: "Victor Louie", imageUrl: "assets/Victor_Louie.jpg" },
    { name: "Member 7", role: "Peter Lu", imageUrl: "assets/Peter_Lu.jpg" },
    { name: "Member 8", role: "Serena Lew", imageUrl: "assets/Serena_Lew.jpg" },
    { name: "Member 9", role: "Haocheng Mai", imageUrl: "assets/Haocheng_Mai.jpg" },
    { name: "Member 9", role: "Valerie Wong", imageUrl: "assets/Valerie_Wong.jpg" },
    { name: "Member 1", role: "Alex Zhang", imageUrl: "assets/Alex_Zhang.jpg" }
];

const teamContainer = document.querySelector('.team');

teamMembers.forEach(member => {
    const memberElement = document.createElement('div');
    memberElement.classList.add('team-member');
    
    const imgElement = document.createElement('img');
    imgElement.src = member.imageUrl;
    imgElement.alt = member.name;
    
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = member.name;
    
    const roleElement = document.createElement('div');
    roleElement.classList.add('role');
    roleElement.textContent = member.role;
    
    memberElement.appendChild(imgElement);
    memberElement.appendChild(nameElement);
    memberElement.appendChild(roleElement);
    teamContainer.appendChild(memberElement);
});
