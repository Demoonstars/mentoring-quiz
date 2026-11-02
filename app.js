/**
 * app.js — SPA «Итоговый тест по наставничеству в индустрии гостеприимства»
 * Vanilla JS ES6+, без фреймворков
 */

/* ════════════════════════════════════════════════════════════
   1. БАНК ВОПРОСОВ (20 вопросов)
   Источники: Лекции по наставничеству в индустрии гостеприимства
   correctIndex — индекс правильного ответа (0-based)
════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: 'Согласно модели корпоративного обучения 70-20-10, какой процент знаний сотрудник получает через непосредственную практику на рабочем месте?',
    options: [
      '10%',
      '20%',
      '70%',
      '90%'
    ],
    correctIndex: 2
  },
  {
    text: 'Какая модель наставничества направлена на социальную и бытовую адаптацию новичка (где столовая, как оформить пропуск и т.д.)?',
    options: [
      'Traditional mentoring',
      'Buddying',
      'Developmental mentoring',
      'Performance mentoring'
    ],
    correctIndex: 1
  },
  {
    text: 'Какая модель наставничества идеально подходит для развития самостоятельности мышления и Soft Skills (через направляющие вопросы)?',
    options: [
      'Buddying',
      'Traditional mentoring',
      'Developmental mentoring',
      'Performance mentoring'
    ],
    correctIndex: 2
  },
  {
    text: 'В чем заключается второй принцип андрагогики (обучения взрослых) по Малкольму Ноулзу?',
    options: [
      'Потребность знать «Зачем?»',
      'Опыт как ресурс (уважение прошлого бэкграунда)',
      'Практическая направленность',
      'Страх потери статуса'
    ],
    correctIndex: 1
  },
  {
    text: 'Согласно теории Льва Выготского, что такое «Зона ближайшего развития» (ЗБР)?',
    options: [
      'Задачи, которые стажер делает легко сам',
      'Задачи, которые для стажера пока невыполнимы',
      'Задачи, которые сотрудник может выполнить только с направляющей подсказкой наставника',
      'Задачи, которые выполняет только руководитель'
    ],
    correctIndex: 2
  },
  {
    text: 'На каком этапе Цикла Колба критически важно, чтобы стажер САМ озвучил, что получилось хорошо, а где он зашел в тупик?',
    options: [
      'Конкретный опыт',
      'Рефлексивное наблюдение',
      'Абстрактная концептуализация',
      'Активное экспериментирование'
    ],
    correctIndex: 1
  },
  {
    text: 'Согласно методике TWI (Шаг 1: Подготовка ученика), какую позицию должен занять стажер, чтобы видеть процесс глазами наставника?',
    options: [
      'Строго напротив наставника',
      'Сбоку от наставника',
      'Сзади наставника',
      'На расстоянии 3 метров'
    ],
    correctIndex: 1
  },
  {
    text: 'Сколько обязательных прогонов (повторений) предусматривает Шаг 3 (Практика) в методике TWI?',
    options: [
      'Один прогон',
      'Два прогона',
      'Три прогона',
      'Пять прогонов'
    ],
    correctIndex: 2
  },
  {
    text: 'Что из перечисленного является «Золотым правилом» при использовании модели обратной связи «Бутерброд» (Sandwich)?',
    options: [
      'Использовать слово «НО» перед зоной роста',
      'Никогда не использовать слово «НО», заменяя его на «При этом»',
      'Начинать разговор сразу с критики',
      'Не хвалить сотрудника, чтобы он не зазнавался'
    ],
    correctIndex: 1
  },
  {
    text: 'В какой ситуации наставнику следует применять модель обратной связи SOR (Standard - Observation - Result)?',
    options: [
      'При серьезных нарушениях дисциплины',
      'Для быстрых поддерживающих правок во время смены',
      'Когда стажер знает правила, умеет их выполнять, но начал лениться или «срезать углы»',
      'При первом знакомстве со стажером'
    ],
    correctIndex: 2
  },
  {
    text: 'В методе оценки лояльности NPS (Net Promoter Score), как называются гости, ставящие оценки от 0 до 6?',
    options: [
      'Промоутеры',
      'Пассивные',
      'Критики (Детракторы)',
      'Лояльные'
    ],
    correctIndex: 2
  },
  {
    text: 'Для какой стадии развития сотрудника (по модели Ситуационного руководства) характерно состояние «Не могу, но Хочу» (Новичок-энтузиаст)?',
    options: [
      'D1',
      'D2',
      'D3',
      'D4'
    ],
    correctIndex: 0
  },
  {
    text: 'Какой стиль управления (S) идеально подходит для сотрудника на стадии D2 («Разочаровавшийся ученик»)?',
    options: [
      'S1: Инструктирующий (Директивный)',
      'S2: Обучающий (Инструкции + максимальная эмоциональная поддержка)',
      'S3: Поддерживающий',
      'S4: Делегирующий'
    ],
    correctIndex: 1
  },
  {
    text: 'Почему на стадии D4 («Мастер») наставнику категорически запрещено использовать микроменеджмент?',
    options: [
      'Это увеличивает время выполнения задачи',
      'Это демотивирует автономного профессионала и ведет к конфликтам',
      'Это требует слишком много ресурсов наставника',
      'Это противоречит методике TWI'
    ],
    correctIndex: 1
  },
  {
    text: 'Опытный портье блестяще решает конфликты (стадия D4), но при внедрении новой IT-системы временно опускается на уровень D1/D2. Что должен сделать наставник?',
    options: [
      'Продолжать использовать делегирующий стиль (S4)',
      'Проявить гибкость: временно сменить стиль на Инструктирующий (S1) и провести обучение',
      'Отстранить сотрудника от работы с новой системой',
      'Попросить другого сотрудника обучить его'
    ],
    correctIndex: 1
  },
  {
    text: 'Какой барьер обучения взрослых характеризуется тем, что человек боится выглядеть некомпетентным и имитирует понимание вместо того, чтобы задать вопрос?',
    options: [
      'Физиологический барьер',
      'Иллюзия компетентности',
      'Страх потери статуса',
      'Потребность знать «Зачем?»'
    ],
    correctIndex: 2
  },
  {
    text: 'Как решается «Физиологический барьер» в обучении персонала отеля?',
    options: [
      'Проводить обучение сложным процессам во второй половине смены',
      'Проводить обучение сложным процессам в первой половине смены',
      'Запретить сотруднику задавать вопросы',
      'Уволить сотрудника, который не усваивает информацию'
    ],
    correctIndex: 1
  },
  {
    text: 'Что означает оценка «2» в Карте навыков (Матрице компетенций) наставника?',
    options: [
      'Не знает / Никогда не делал',
      'Знает теорию, но делает только с постоянной подсказкой',
      'Делает самостоятельно в стандартных ситуациях, но теряется в нестандартных',
      'Уверенный навык (Мастер), может обучить другого'
    ],
    correctIndex: 2
  },
  {
    text: 'Какое правило работы с чек-листом (Журналом наблюдений) помогает исключить обиды сотрудника при обратной связи?',
    options: [
      'Держать чек-лист в секрете от стажера',
      'Проводить оценку через неделю после выполнения задачи',
      'Фиксация конкретных фактов, а не домыслов (например, «не использовал приветствие», а не «грубо ответил»)',
      'Оценивать только негативные моменты'
    ],
    correctIndex: 2
  },
  {
    text: 'Что из перечисленного НЕ является критерием успешного завершения наставничества?',
    options: [
      'Сотрудник выполняет стандарты без присутствия наставника в зоне видимости',
      'Сотрудник укладывается в нормативы времени отеля',
      'Сотрудник постоянно требует контроля и одобрения наставника',
      'Успешное прохождение итоговой аттестации'
    ],
    correctIndex: 2
  }
];

/* ════════════════════════════════════════════════════════════
   2. КОНФИГУРАЦИЯ
════════════════════════════════════════════════════════════ */

const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYED_APPS_SCRIPT_URL'; // Сюда вставите новую ссылку

/** Порог прохождения: 85% = 17 правильных из 20 */
const PASS_THRESHOLD = 0.85;
const TOTAL_QUESTIONS = QUESTIONS.length; // 20

/* ════════════════════════════════════════════════════════════
   3. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
════════════════════════════════════════════════════════════ */
const state = {
  currentScene: 1,
  consentGiven: false,
  userData: {
    fullName:     '',
    organization: '',
    position:     '',
    department:   '',
    birthDate:    '',
    hireDate:     ''
  },
  answers: [],
  currentQuestionIndex: 0
};

/* ════════════════════════════════════════════════════════════
   4. DOM-ССЫЛКИ
════════════════════════════════════════════════════════════ */
const sceneMap = {
  1: document.getElementById('scene-welcome'),
  2: document.getElementById('scene-consent'),
  3: document.getElementById('scene-form'),
  4: document.getElementById('scene-quiz'),
  5: document.getElementById('scene-result')
};

const btnStart       = document.getElementById('btn-start');
const btnConsentCont = document.getElementById('btn-consent-continue');
const btnFormSubmit  = document.getElementById('btn-form-submit');
const btnNext        = document.getElementById('btn-next');
const btnNextLabel   = document.getElementById('btn-next-label');
const btnRetry       = document.getElementById('btn-retry');

const consentCheckbox = document.getElementById('consent-checkbox');

const inputFullname   = document.getElementById('input-fullname');
const inputOrg        = document.getElementById('input-org');
const inputPosition   = document.getElementById('input-position');
const inputDepartment = document.getElementById('input-department');
const inputBirthdate  = document.getElementById('input-birthdate');
const inputHiredate   = document.getElementById('input-hiredate');

const quizCounter      = document.getElementById('quiz-counter');
const progressBarFill  = document.getElementById('progress-bar-fill');
const progressBarTrack = document.getElementById('progress-bar-track');
const questionCard     = document.getElementById('question-card');
const questionNumber   = document.getElementById('question-number');
const questionText     = document.getElementById('question-text');
const optionsList      = document.getElementById('options-list');

const resultIconWrap = document.getElementById('result-icon-wrap');
const resultTitle    = document.getElementById('result-title');
const resultText     = document.getElementById('result-text');
const scoreNumber    = document.getElementById('score-number');
const scoreRingFill  = document.getElementById('score-ring-fill');
const statCorrect    = document.getElementById('stat-correct');
const statPercent    = document.getElementById('stat-percent');
const statStatus     = document.getElementById('stat-status');
const submitStatus   = document.getElementById('submit-status');

/* ════════════════════════════════════════════════════════════
   5. УПРАВЛЕНИЕ СЦЕНАМИ
════════════════════════════════════════════════════════════ */
function showScene(n) {
  Object.entries(sceneMap).forEach(([idx, scene]) => {
    if (!scene) return;
    if (Number(idx) === n) {
      scene.classList.add('active');
      scene.removeAttribute('aria-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scene.classList.remove('active');
      scene.setAttribute('aria-hidden', 'true');
    }
  });
  state.currentScene = n;
}

/* ════════════════════════════════════════════════════════════
   6. СЦЕНА 2: СОГЛАСИЕ НА ОБРАБОТКУ ПДн
════════════════════════════════════════════════════════════ */
function updateConsentButton() {
  const checked = consentCheckbox.checked;
  state.consentGiven = checked;
  btnConsentCont.disabled = !checked;
  btnConsentCont.setAttribute('aria-disabled', String(!checked));
}
consentCheckbox.addEventListener('change', updateConsentButton);

/* ════════════════════════════════════════════════════════════
   7. СЦЕНА 3: ВАЛИДАЦИЯ ФОРМЫ
════════════════════════════════════════════════════════════ */
const formFields = [
  inputFullname, inputOrg, inputPosition,
  inputDepartment, inputBirthdate, inputHiredate
];

function validateForm() {
  const allFilled = formFields.every(f => f.value.trim() !== '');
  btnFormSubmit.disabled = !allFilled;
  btnFormSubmit.setAttribute('aria-disabled', String(!allFilled));
}

formFields.forEach(field => {
  field.addEventListener('input', validateForm);
  field.addEventListener('change', validateForm);
});

function collectFormData() {
  state.userData.fullName     = inputFullname.value.trim();
  state.userData.organization = inputOrg.value.trim();
  state.userData.position     = inputPosition.value.trim();
  state.userData.department   = inputDepartment.value.trim();
  state.userData.birthDate    = inputBirthdate.value;
  state.userData.hireDate     = inputHiredate.value;
}

/* ════════════════════════════════════════════════════════════
   8. СЦЕНА 4: ЛОГИКА ТЕСТА
════════════════════════════════════════════════════════════ */
function startQuiz() {
  state.answers = [];
  state.currentQuestionIndex = 0;
  renderQuestion(0);
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const num = index + 1;

  quizCounter.textContent = `Вопрос ${num} из ${TOTAL_QUESTIONS}`;
  const pct = (index / TOTAL_QUESTIONS) * 100;
  progressBarFill.style.width = pct + '%';
  progressBarTrack.setAttribute('aria-valuenow', String(index));

  questionNumber.textContent = 'Вопрос ' + String(num).padStart(2, '0');
  questionText.textContent = q.text;

  optionsList.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    label.setAttribute('for', `opt-${index}-${optIdx}`);

    const radio = document.createElement('input');
    radio.type      = 'radio';
    radio.name      = `q${index}`;
    radio.id        = `opt-${index}-${optIdx}`;
    radio.value     = String(optIdx);
    radio.className = 'option-radio';
    if (state.answers[index] === optIdx) radio.checked = true;

    radio.addEventListener('change', () => onOptionSelect(index, optIdx));

    const marker = document.createElement('span');
    marker.className = 'option-marker';
    marker.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.className   = 'option-text';
    textSpan.textContent = optText;

    label.appendChild(radio);
    label.appendChild(marker);
    label.appendChild(textSpan);
    optionsList.appendChild(label);
  });

  updateNextButton(index);
  btnNextLabel.textContent = (index === TOTAL_QUESTIONS - 1) ? 'Завершить тест' : 'Далее';
}

function onOptionSelect(qIdx, optIdx) {
  state.answers[qIdx] = optIdx;
  updateNextButton(qIdx);
}

function updateNextButton(index) {
  const answered = state.answers[index] !== undefined;
  btnNext.disabled = !answered;
  btnNext.setAttribute('aria-disabled', String(!answered));
}

function goToNextQuestion() {
  const cur = state.currentQuestionIndex;

  if (cur < TOTAL_QUESTIONS - 1) {
    questionCard.classList.add('leaving');
    setTimeout(() => {
      questionCard.classList.remove('leaving');
      state.currentQuestionIndex = cur + 1;
      renderQuestion(state.currentQuestionIndex);
    }, 250);
  } else {
    showResults();
  }
}

/* ════════════════════════════════════════════════════════════
   9. СЦЕНА 5: РЕЗУЛЬТАТЫ
════════════════════════════════════════════════════════════ */
function calculateResult() {
  let correct = 0;
  QUESTIONS.forEach((q, idx) => {
    if (state.answers[idx] === q.correctIndex) correct++;
  });
  const percent = Math.round((correct / TOTAL_QUESTIONS) * 100);
  const passed  = (correct / TOTAL_QUESTIONS) >= PASS_THRESHOLD;
  return { correct, percent, passed };
}

function showResults() {
  const { correct, percent, passed } = calculateResult();

  showScene(5);

  resultIconWrap.textContent = passed ? '🎉' : '😔';

  resultTitle.className   = 'result-title ' + (passed ? 'success' : 'failure');
  resultTitle.textContent = passed
    ? 'Поздравляем! Тест сдан успешно.'
    : 'Тест не сдан.';

  resultText.textContent = passed
    ? 'Вы успешно прошли итоговый тест по наставничеству в индустрии гостеприимства. Ваши результаты сохранены в системе.'
    : `Вы ответили правильно на ${correct} из ${TOTAL_QUESTIONS} вопросов. ` +
      'Рекомендуем освежить знания по материалам лекций и попробовать ещё раз. ' +
      'У вас обязательно получится!';

  scoreNumber.textContent = String(correct);
  statCorrect.textContent = `${correct} из ${TOTAL_QUESTIONS}`;
  statPercent.textContent = percent + '%';
  statStatus.textContent  = passed ? 'Сдал / Сдала' : 'Не сдан';
  statStatus.className    = 'stat-value stat-status ' + (passed ? 'success' : 'failure');

  const offset = 314 - (percent / 100) * 314;
  scoreRingFill.className = 'score-ring-fill ' + (passed ? 'success' : 'failure');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = String(offset);
    });
  });

  progressBarFill.style.width = '100%';
  progressBarTrack.setAttribute('aria-valuenow', String(TOTAL_QUESTIONS));

  submitStatus.textContent = '';
  submitStatus.className   = 'submit-status';

  const payload = {
    fullName:       state.userData.fullName,
    organization:   state.userData.organization,
    position:       state.userData.position,
    department:     state.userData.department,
    birthDate:      state.userData.birthDate,
    hireDate:       state.userData.hireDate,
    correctAnswers: correct,
    totalQuestions: TOTAL_QUESTIONS,
    percent:        percent,
    passed:         passed,
    timestamp:      new Date().toISOString()
  };

  sendResultsToGoogleSheets(payload);
}

/* ════════════════════════════════════════════════════════════
   10. ОТПРАВКА ДАННЫХ В GOOGLE SHEETS
════════════════════════════════════════════════════════════ */
async function sendResultsToGoogleSheets(payload) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_DEPLOYED_APPS_SCRIPT_URL') {
    console.warn('[Quiz] Google Apps Script URL не настроен. Данные не отправлены.');
    submitStatus.textContent = '⚠ URL Google Sheets не настроен (см. README.md)';
    submitStatus.className   = 'submit-status error';
    return;
  }

  submitStatus.textContent = '⏳ Сохранение результатов...';
  submitStatus.className   = 'submit-status sending';

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    console.log('[Quiz] Данные отправлены в Google Sheets:', payload);
    submitStatus.textContent = '✅ Результаты сохранены в системе';
    submitStatus.className   = 'submit-status sent';
  } catch (error) {
    console.error('[Quiz] Ошибка отправки данных:', error);
    submitStatus.textContent = '⚠ Не удалось сохранить результаты. Обратитесь к ответственному за безопасность.';
    submitStatus.className   = 'submit-status error';
  }
}

/* ════════════════════════════════════════════════════════════
   11. СБРОС И ПЕРЕЗАПУСК
════════════════════════════════════════════════════════════ */
function resetApp() {
  state.consentGiven         = false;
  state.userData             = { fullName: '', organization: '', position: '', department: '', birthDate: '', hireDate: '' };
  state.answers              = [];
  state.currentQuestionIndex = 0;

  [inputFullname, inputOrg, inputPosition, inputDepartment, inputBirthdate, inputHiredate]
    .forEach(f => { f.value = ''; });
  validateForm();

  consentCheckbox.checked = false;
  updateConsentButton();

  scoreRingFill.style.strokeDashoffset = '314';
  scoreRingFill.className = 'score-ring-fill';

  showScene(1);
}

/* ════════════════════════════════════════════════════════════
   12. ОБРАБОТЧИКИ СОБЫТИЙ
════════════════════════════════════════════════════════════ */
btnStart.addEventListener('click', () => showScene(2));

btnConsentCont.addEventListener('click', () => {
  if (state.consentGiven) showScene(3);
});

btnFormSubmit.addEventListener('click', () => {
  collectFormData();
  startQuiz();
  showScene(4);
});

btnNext.addEventListener('click', () => {
  if (!btnNext.disabled) goToNextQuestion();
});

btnRetry.addEventListener('click', resetApp);

document.getElementById('user-form').addEventListener('submit', e => e.preventDefault());

/* ════════════════════════════════════════════════════════════
   13. ИНИЦИАЛИЗАЦИЯ
════════════════════════════════════════════════════════════ */
function init() {
  showScene(1);
  updateConsentButton();
  validateForm();
  btnNext.disabled = true;
  btnNext.setAttribute('aria-disabled', 'true');
  console.log('[Quiz] Приложение инициализировано. Вопросов:', TOTAL_QUESTIONS);
}

document.addEventListener('DOMContentLoaded', init);
