const teamMembers = [
    { name: "Yishan Luo", role: "Founder", imageUrl: "assets/Yishan_Luo.jpg" },
    { name: "Sabrina Lynch", role: "Consultant", imageUrl: "assets/Sabrina_Lynch.jpg" },
    { name: "Leilia Lin", role: "Technical Project Manager", imageUrl: "assets/Leilia_Lin.jpg" },
    { name: "Elaine Lin", role: "Product Design Director", imageUrl: "assets/Elaine_Lin.jpg" },
    { name: "Julia Ma", role: "Staff Software Engineer", imageUrl: "assets/Julia_Ma.jpg" },
    { name: "Victor Louie", role: "Researcher", imageUrl: "assets/Victor_Louie.jpg" },
    { name: "Peter Lu", role: "Software Engineer III", imageUrl: "assets/Peter_Lu.jpg" },
    { name: "Serena Lew", role: "Software Engineer III", imageUrl: "assets/Serena_Lew.jpg" },
    { name: "Haocheng Mai", role: "Software Engineer III", imageUrl: "assets/Haocheng_Mai.jpg" },
    { name: "Valerie Wong", role: "Software Engineer II", imageUrl: "assets/Valerie_Wong.jpg" },
    { name: "Alex Zhang", role: "Software Engineer II", imageUrl: "assets/Alex_Zhang.jpg" }
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
