const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();
    const name =(document.getElementById ('name') as HTMLInputElement).value
    const email =(document.getElementById ('email') as HTMLInputElement).value
    const phone =(document.getElementById ('phone') as HTMLInputElement).value
    const quarter =(document.getElementById ('quarter') as HTMLInputElement).value
    const education =(document.getElementById ('education') as HTMLInputElement).value
    const experience =(document.getElementById ('experience') as HTMLInputElement).value
    const skills =(document.getElementById ('skills') as HTMLInputElement).value

    const resumeHTML =`
    <h2><B> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b> Name:</b><span contenteditable ="true"> ${name}</span></p>
    <p><b> Email::</b><span contenteditable ="true"> ${email}</span></p>
    <p><b> Tel:</b><span contenteditable ="true"> ${phone}</span></p>
    <p><b> Quarter:</b> <span contenteditable ="true">${quarter}</span></p>

    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>

    <h3>Experience</h3>
    <P contenteditable ="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML =resumeHTML;
    }else{
        console.error('The Resume display is missing.');
    }
});