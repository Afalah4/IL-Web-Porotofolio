const profileData = {
    name: "Afalah Rafli Al - Hadi",
    title: "Mahasiswa di Politeknik Negeri Sriwijaya Jurusan Manajemen Informatika",
    about: "Passionate software engineer with experience in building scalable web applications. Skilled in JavaScript, React, and Node.js.",
    experience: [
        { title: "Efisiensi Pengukuran dan Mutu", company: "PLN", duration: "Februari 2024 - Juni 2024", description: "Magang." },
        { title: "Sekretaris Divisi HUMAS", company: "HMJ Manajemen Informatika", duration: "December 2019 - Oktober 2024", description: "Pernah menjabat sebagai anggota MEDINFO dan sekarang menjabat sebagai Sekretaris" }
    ],
    education: [
        { degree: "Manajemen Informatika D IV", school: "Politeknik Negeri Sriwijaya", graduationYear: "2025" }
        ,{ degree: "Teknik Komputer dan Jaringan", school: "SMKN 2 palembang", graduationYear: "2021" }
    ],
    skills: ["After Effect", "Premiere Pro", "Illustrator", "Photoshop"],
};

function renderProfileCard() {
    const sidebar = document.getElementById('sidebar');
    
    const profileCard = `
        <div class="profile-card">
            <div class="profile-picture">
                 <img src="IMG_1947.jpg" alt="Profile Picture">
            </div>
            <h2>${profileData.name}</h2>
            <p>${profileData.title}</p>
            <p><a href="https://www.linkedin.com/in/afalah-rafli-220878264/" class="connect-button">Linkedln</a></p>
        </div>
        <div class="connections">
            <h3>Tentang Saya</h3>
             <p>Di tahun 2024 berkesempatan magang di PT. PLN UID S2JB di divisi EPM selama 4 bulan dan pada 2020 pernah magang di Universitas Indo Global Mandiri pada divisi BPT selama 3 bulan. Di CV. Cahaya Azkara bekerja sebagai peng-operasi mesin cutting stiker dan pernah bekerja sama dengan salah satu cathering di Palembang untuk membuat stiker nama serta hiasan pada mobil operasinya, dengan Hannoch membuat stiker nama untuk etalase, pada PT. Pertamina menjadi supplyer cutting stiker nama untuk etalase oli Enduro, lalu dengan Kelurahan Air Salek Banyuasin membuat papan nama jalan. Serta memiliki keahlian dalam motion graphic dan editing menggunakan Adobe After Effect dan Photoshop.</p>
        </div>`;
    
    sidebar.innerHTML = profileCard;
}

function renderExperience() {
    const mainContent = document.getElementById('main-content');
    
    let experienceHTML = '<section class="experience"><h2>Pengalaman Kerja</h2>';
    
    profileData.experience.forEach(job => {
        experienceHTML += `
            <div class="job">
                <h3>${job.title}</h3>
                <p><strong>${job.company}</strong> | ${job.duration}</p>
                <p>${job.description}</p>
            </div>`;
    });
    
    experienceHTML += '</section>';
    
    mainContent.innerHTML += experienceHTML;
}

function renderEducation() {
    const mainContent = document.getElementById('main-content');
    
    let educationHTML = '<section class="education"><h2>Riwayat Pendidikan</h2>';
    
    profileData.education.forEach(school => {
        educationHTML += `
            <div class="school">
                <h3>${school.degree}</h3>
                <p><strong>${school.school}</strong> | Lulus: ${school.graduationYear}</p>
            </div>`;
    });
    
    educationHTML += '</section>';
    
    mainContent.innerHTML += educationHTML;
}

function renderSkills() {
     const mainContent = document.getElementById('main-content');
    
     let skillsHTML = '<section class="skills"><h2>Skills</h2><ul class="skills-list">';
     
     profileData.skills.forEach(skill => {
         skillsHTML += `<li><i class="fab fa-adobe"></i> ${skill}</li>`;
     });
     
     skillsHTML += '</ul></section>';
     
     mainContent.innerHTML += skillsHTML;
}

function renderTrendingNews() {
     const rightSidebar = document.getElementById('right-sidebar');
     
     const trendingNewsHTML = `
         <h3>Trending News</h3>
          <ul class="trending-news">
             <li><a href="https://www.instagram.com/afalahraflii/">Instagram</a></li>
             <li><a href="https://www.linkedin.com/in/afalah-rafli-220878264/">Linkedln</a></li>
             <li><a href="https://www.youtube.com/@yuoknowho">Youtube</a></li>
         </ul>`;
     
     rightSidebar.innerHTML = trendingNewsHTML;
}

function renderProfile() {
     renderProfileCard();
     renderExperience();
     renderEducation();
     renderSkills();
     renderTrendingNews();
}

renderProfile();
