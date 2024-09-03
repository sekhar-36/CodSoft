document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('.progress');

    function showSkillBars() {
        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillTop < windowHeight - 100) {
                const progress = skill.dataset.progress;
                skill.style.width = `${progress}%`;
                skill.style.transition = 'width 1s ease';
            }
        });
    }

    window.addEventListener('scroll', showSkillBars);
    showSkillBars(); 
});
