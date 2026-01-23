// Form data storage
let formData = {
    step1: {},
    step2: {}
};

// Initialize form
document.addEventListener('DOMContentLoaded', function() {
    // Create modal HTML
    createFormModal();
});

function createFormModal() {
    const modalHTML = `
    <div class="form-modal" id="formModal">
        <div class="form-modal__overlay"></div>
        <div class="form-modal__container">
            <button class="form-modal__close" aria-label="Закрыть">&times;</button>

            <!-- Step 1 -->
            <div class="form-step" id="formStep1">
                <div class="form-step__header">
                    <span class="form-step__number">1/2</span>
                    <h3 class="form-step__title">Давайте познакомимся</h3>
                    <p class="form-step__subtitle">Оставьте контакты, и мы свяжемся с вами</p>
                </div>

                <form id="step1Form" class="form-fields">
                    <div class="form-field">
                        <label for="userName">Имя и фамилия *</label>
                        <input type="text" id="userName" name="name" required placeholder="Как вас зовут?">
                    </div>

                    <div class="form-field">
                        <label for="userPhone">Телефон *</label>
                        <input type="tel" id="userPhone" name="phone" required placeholder="+7 (___) ___-__-__">
                    </div>

                    <div class="form-field form-field--checkbox">
                        <label class="checkbox-label">
                            <input type="checkbox" id="userConsent" name="consent" required>
                            <span class="checkbox-custom"></span>
                            <span class="checkbox-text">Согласен с <a href="privacy.html" target="_blank">политикой конфиденциальности</a></span>
                        </label>
                    </div>

                    <button type="submit" class="form-btn form-btn--primary">
                        Далее
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </form>
            </div>

            <!-- Step 2 -->
            <div class="form-step form-step--hidden" id="formStep2">
                <div class="form-step__header">
                    <span class="form-step__number">2/2</span>
                    <h3 class="form-step__title">Расскажите о себе</h3>
                    <p class="form-step__subtitle">Это поможет подобрать подходящую группу</p>
                </div>

                <form id="step2Form" class="form-fields">
                    <div class="form-row">
                        <div class="form-field">
                            <label for="userEmail">Email *</label>
                            <input type="email" id="userEmail" name="email" required placeholder="email@example.com">
                        </div>
                        <div class="form-field">
                            <label for="userAge">Возраст *</label>
                            <input type="text" id="userAge" name="age" required placeholder="35">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-field">
                            <label for="userCity">Город проживания *</label>
                            <input type="text" id="userCity" name="city" required placeholder="Москва">
                        </div>
                        <div class="form-field">
                            <label for="userSocial">Ссылка на соцсеть *</label>
                            <input type="text" id="userSocial" name="social" required placeholder="t.me/username">
                        </div>
                    </div>

                    <div class="form-field">
                        <label for="userActivity">Род деятельности, роль и зона ответственности *</label>
                        <textarea id="userActivity" name="activity" required placeholder="Опишите чем занимаетесь, вашу роль и зону ответственности"></textarea>
                    </div>

                    <div class="form-field">
                        <label for="userIncome">Вилка годового дохода (2024/2025) *</label>
                        <input type="text" id="userIncome" name="income" required placeholder="Например: 3-5 млн руб">
                    </div>

                    <div class="form-field">
                        <label for="userGoals">В каком направлении хотите развиваться? *</label>
                        <textarea id="userGoals" name="goals" required placeholder="Какие цели на 2026 год и далее?"></textarea>
                    </div>

                    <div class="form-field">
                        <label for="userQuestions">Какие 3-5 вопросов хотите обсудить в группе? *</label>
                        <textarea id="userQuestions" name="questions" required placeholder="Какие темы и задачи важны для вас?"></textarea>
                    </div>

                    <div class="form-field">
                        <label for="userExpertise">В каких темах готовы делиться опытом? *</label>
                        <textarea id="userExpertise" name="expertise" required placeholder="Чем можете быть полезны группе?"></textarea>
                    </div>

                    <div class="form-field">
                        <label for="userMilestones">Вехи развития бизнеса/профессии (5-7 этапов) *</label>
                        <textarea id="userMilestones" name="milestones" required placeholder="Ключевые этапы вашего пути"></textarea>
                    </div>

                    <div class="form-field">
                        <label for="userParams">5-7 параметров вашего дела *</label>
                        <textarea id="userParams" name="params" required placeholder="Размер команды, выручка, география и т.д."></textarea>
                    </div>

                    <div class="form-field">
                        <label for="userFamily">Семейный статус, дети, девиз отношений *</label>
                        <textarea id="userFamily" name="family" required placeholder="Немного о личном"></textarea>
                    </div>

                    <div class="form-field">
                        <label for="userAbout">Что ещё важно знать о вас для группы? *</label>
                        <textarea id="userAbout" name="about" required placeholder="Любая информация, которой хотите поделиться"></textarea>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="form-btn form-btn--secondary" onclick="goToStep1()">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Назад
                        </button>
                        <button type="submit" class="form-btn form-btn--primary">
                            Отправить заявку
                        </button>
                    </div>
                </form>
            </div>

            <!-- Success -->
            <div class="form-step form-step--hidden" id="formSuccess">
                <div class="form-success">
                    <div class="form-success__icon">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <circle cx="32" cy="32" r="32" fill="#10B981" fill-opacity="0.1"/>
                            <path d="M20 32L28 40L44 24" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3 class="form-success__title">Заявка отправлена!</h3>
                    <p class="form-success__text">Спасибо за интерес к форум-группам. Мы свяжемся с вами в ближайшее время.</p>
                    <button class="form-btn form-btn--primary" onclick="closeFormModal()">Отлично!</button>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Event listeners
    document.querySelector('.form-modal__overlay').addEventListener('click', closeFormModal);
    document.querySelector('.form-modal__close').addEventListener('click', closeFormModal);

    // Form submissions
    document.getElementById('step1Form').addEventListener('submit', handleStep1Submit);
    document.getElementById('step2Form').addEventListener('submit', handleStep2Submit);

    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeFormModal();
    });
}

function openFormModal() {
    const modal = document.getElementById('formModal');
    modal.classList.add('form-modal--active');
    document.body.style.overflow = 'hidden';

    // Reset to step 1
    document.getElementById('formStep1').classList.remove('form-step--hidden');
    document.getElementById('formStep2').classList.add('form-step--hidden');
    document.getElementById('formSuccess').classList.add('form-step--hidden');
}

function closeFormModal() {
    const modal = document.getElementById('formModal');
    modal.classList.remove('form-modal--active');
    document.body.style.overflow = '';
}

function goToStep1() {
    document.getElementById('formStep1').classList.remove('form-step--hidden');
    document.getElementById('formStep2').classList.add('form-step--hidden');
}

function goToStep2() {
    document.getElementById('formStep1').classList.add('form-step--hidden');
    document.getElementById('formStep2').classList.remove('form-step--hidden');
}

function showSuccess() {
    document.getElementById('formStep1').classList.add('form-step--hidden');
    document.getElementById('formStep2').classList.add('form-step--hidden');
    document.getElementById('formSuccess').classList.remove('form-step--hidden');
}

async function handleStep1Submit(e) {
    e.preventDefault();
    console.log('Step 1 submit started');

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');

    // Collect data from step 1
    formData.step1 = {
        name: document.getElementById('userName').value,
        phone: document.getElementById('userPhone').value,
        timestamp: new Date().toLocaleString('ru-RU')
    };

    console.log('Step 1 data:', formData.step1);

    // Disable button
    submitBtn.disabled = true;
    const originalHTML = submitBtn.innerHTML;
    submitBtn.textContent = 'Отправка...';

    // Send step 1 data to backend
    try {
        console.log('Sending to forum-step1.php...');
        const response = await fetch('https://videos.moderator.top/forum-step1.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.step1.name,
                phone: formData.step1.phone
            })
        });

        console.log('Response status:', response.status);
        const result = await response.json();
        console.log('Response data:', result);

        if (!response.ok) {
            throw new Error('Server error');
        }

        console.log('Step 1 sent successfully, going to step 2');
        // Go to step 2 after successful submission
        goToStep2();
    } catch (error) {
        console.error('Error sending step 1:', error);
        alert('Ошибка отправки данных. Проверьте подключение к интернету. Вы все равно можете продолжить заполнение анкеты.');
        // Still proceed to step 2 even if sending fails
        goToStep2();
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    }
}

async function handleStep2Submit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');

    // Collect data
    formData.step2 = {
        email: document.getElementById('userEmail').value,
        age: document.getElementById('userAge').value,
        city: document.getElementById('userCity').value,
        social: document.getElementById('userSocial').value,
        activity: document.getElementById('userActivity').value,
        income: document.getElementById('userIncome').value,
        goals: document.getElementById('userGoals').value,
        questions: document.getElementById('userQuestions').value,
        expertise: document.getElementById('userExpertise').value,
        milestones: document.getElementById('userMilestones').value,
        params: document.getElementById('userParams').value,
        family: document.getElementById('userFamily').value,
        about: document.getElementById('userAbout').value
    };

    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    // Prepare data for backend
    const applicationData = {
        name: formData.step1.name,
        phone: formData.step1.phone,
        email: formData.step2.email,
        age: formData.step2.age,
        city: formData.step2.city,
        social: formData.step2.social,
        activity: formData.step2.activity,
        income: formData.step2.income,
        goals: formData.step2.goals,
        questions: formData.step2.questions,
        expertise: formData.step2.expertise,
        milestones: formData.step2.milestones,
        params: formData.step2.params,
        family: formData.step2.family,
        about: formData.step2.about
    };

    try {
        await sendToTelegram(applicationData);
        showSuccess();

        // Reset forms
        document.getElementById('step1Form').reset();
        document.getElementById('step2Form').reset();
        formData = { step1: {}, step2: {} };
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        alert('Произошла ошибка. Попробуйте ещё раз или свяжитесь с нами в Telegram.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить заявку';
    }
}

async function sendToTelegram(data) {
    const url = 'https://videos.moderator.top/forum-submit.php';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Server error');
    }

    return response.json();
}
