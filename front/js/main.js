(function () {

    const apiURL = 'https://fav-prom.com/api_shakhtar_new_game_universe'



    let isVerifiedUser = false;

    const promoStartDate = new Date("2025-10-14");




    const matches = [
        { date: '2025-10-23T19:45:00', id: 1 },  // Ліга конференцій: Шахтар - Легія
        { date: '2025-10-25T18:00:00', id: 2 },  // УПЛ: Шахтар - Кудрівка
        { date: '2025-10-28T17:00:00', id: 3 },  // Кубок України: Динамо - Шахтар
        { date: '2025-11-01T18:00:00', id: 4 },  // УПЛ: Шахтар - Динамо
        { date: '2025-11-06T19:45:00', id: 5 },  // Ліга конференцій: Шахтар - Брейдаблік
        { date: '2025-11-08T18:00:00', id: 6 },  // УПЛ: Шахтар - СК Полтава
        { date: '2025-11-22T18:00:00', id: 7 },  // УПЛ: Оболонь - Шахтар
        { date: '2025-11-27T22:00:00', id: 8 },  // Ліга конференцій: Шемрок Роверс - Шахтар
        { date: '2025-11-29T18:00:00', id: 9 },  // УПЛ: Шахтар - Кривбас
        { date: '2025-12-06T18:00:00', id: 10 }, // УПЛ: Колос - Шахтар
        { date: '2025-12-11T22:00:00', id: 11 }, // Ліга конференцій: Хамрун Спартанс - Шахтар
        { date: '2025-12-13T18:00:00', id: 12 }, // УПЛ: Шахтар - Епіцентр
        { date: '2025-12-18T22:00:00', id: 13 }, // Ліга конференцій: Шахтар - Рієка
    ];



    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        loader = document.querySelector(".spinner-overlay"),
        prizeItems = document.querySelectorAll('[data-amount-points]'),
        pointsBar = document.querySelector('.progress-bar'),
        prizeBlock = document.querySelector('.prize'),
        popups = document.querySelector('.popups'),
        lastUpd = document.querySelector('.prize__last-upd')


    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });


    // let locale = "en"
    let locale = sessionStorage.getItem("locale") || "uk"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) {
        hideLoader()
    }

    let userPoints = 0

    let i18nData = {};
    const translateState = true;
    let userId = null;
    // let userId = Number(sessionStorage.getItem("userId")) ?? null
    userId = 100300268

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
                console.error('API request failed:', err);

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

                return Promise.reject(err);
            });

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    function showNextMatch(testId) {
        const now = new Date("2025-10-23T19:44:40");
        let nextMatch = matches.find(match => new Date(match.date) > now) || matches[matches.length - 1];

        const prevMatchIndex = matches.findIndex(match => match.id === nextMatch.id) - 1;
        let prevMatchDate = prevMatchIndex >= 0
            ? new Date(matches[prevMatchIndex].date)
            : promoStartDate;

        document.querySelectorAll('[data-match]').forEach(el => {
            const matchId = Number(el.getAttribute('data-match'));

            if (testId) {
                nextMatch = matches.find(m => m.id === testId) || matches[0];
                prevMatchDate = matches[nextMatch.id - 2]?.date || promoStartDate;
            }

            if (matchId === nextMatch.id) {
                el.classList.remove('hide');
                initCountdown('.info__match-next-time', prevMatchDate, nextMatch.date, el);
            } else {
                el.classList.add('hide');
            }
        });
    }


    // function showNextMatch(testId) {
    //
    //     const now = new Date();
    //
    //     let nextMatch = matches.find(match => new Date(match.date) > now) || matches[matches.length - 1];
    //
    //     const prevMatchIndex = matches.findIndex(match => match.id === nextMatch.id) - 1;
    //     let prevMatchDate = prevMatchIndex >= 0
    //         ? new Date(matches[prevMatchIndex].date)
    //         : promoStartDate;
    //
    //     document.querySelectorAll('[data-match]').forEach(el => {
    //         const matchId = Number(el.getAttribute('data-match'));
    //
    //         nextMatch = matches[3]
    //         prevMatchDate = matches[nextMatch.id - 1].date || promoStartDate
    //
    //         if (matchId === nextMatch.id) {
    //             el.classList.remove('hide');
    //             initCountdown('.info__match-next-time', prevMatchDate, nextMatch.date, el)
    //         } else {
    //             el.classList.add('hide');
    //         }
    //     });
    // }


    function setWonItem(item){
        item.classList.add('won');
        item.classList.remove('active');

        const points = item.querySelector('.prize__amount-points') ?? item.querySelector('.prize__item-points');

        points.textContent = translateKey("won")
    }

    function setLockItem(item){
        item.classList.remove('won');
        item.classList.remove('active');

        const amount = item.getAttribute('data-amount-points');

        const points = item.querySelector('.prize__amount-points') ?? item.querySelector('.prize__item-points');

        points.textContent = `${amount} ${translateKey("points")}`

    }

    function setActiveItem(item){
        item.classList.remove('won');
        item.classList.add('active');

        console.log(item)
        const amount = item.getAttribute('data-amount-points');

        const points = item.querySelector('.prize__amount-points') ?? item.querySelector('.prize__item-points');

        points.textContent = `${amount} ${translateKey("points")}`

    }

    function confirmPrize(popup, item){
        console.log(item);

        // request('/user/prize', {
        //     method: 'POST'
        //     body: JSON.stringify({
        //         userid: userId,
        //         prizeid
        //     })
        //
        // })

        const confirmButton = popup.querySelector('[data-confirm="confirmed"]');
        const unconfirmButtons = popup.querySelectorAll('[data-confirm="unconfirmed"]');
        const title = popup.querySelector('.popup__title');
        const text = popup.querySelector('.popup__text');

        setWonItem(item);

        popup.classList.add("confirmed");

        title.innerHTML = translateKey("popupTitleYouChose")
        text.innerHTML = translateKey("popupTextYouChose")

        confirmButton.classList.remove('hide');

        unconfirmButtons.forEach((el, i) => {
            el.classList.add('hide');
        })

    }

    function setLastUpdatedText(element, dateString, locale) {
        const lastUpdLocale = locale === 'uk' ? 'uk-UA' : 'en-US';
        const formattedDate = new Date(dateString).toLocaleString(lastUpdLocale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        element.textContent = formattedDate;
    }


    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }


        function quickCheckAndRender() {
            checkUserAuth()
                .then(() =>{
                    setTimeout(hideLoader, 300);

                    showNextMatch()

                    prizeBlock.addEventListener('click', (e) => {
                        const prizeItem = e.target.closest('[data-amount-points]');

                        // Якщо натиснули на приз
                        if (prizeItem) {
                            const points = prizeItem.getAttribute('data-amount-points');

                            if (e.target.closest('.prize__item-btn')) {
                                openPopupByAttr(`${points}PointsPopup`);
                            } else {
                                openPopupByAttr(`${points}PointsPopupInfo`);
                            }
                        }
                    });

                    mainPage.addEventListener('click', (e) => {
                        const participateBtn = e.target.closest('.part-btn');
                        if (participateBtn) {
                            // логіка участі
                            participate()
                            return;
                        }

                    });

                    popups.addEventListener('click', (e) => {
                        const takeBtn = e.target.closest('[data-action="takeBonus"]');
                        const closeBtn = e.target.closest('.popup__close');
                        const openPopupEl = document.querySelector('.popup.active');


                        // Якщо натиснули на кнопку "Взяти бонус"
                        if (takeBtn) {
                            const popup = document.querySelector(".popup.active");
                            if (!popup) return;

                            const popupAmount = Number(popup.getAttribute('data-popup-amount'));
                            const itemPrize = prizeBlock.querySelector(`[data-amount-points="${popupAmount}"]`);

                            if(userPoints >= popupAmount){
                                toggleClasses([takeBtn], "loader")
                                toggleTranslates([takeBtn], "loader")
                                request('/user/prize', {
                                    method: "POST",
                                    body: JSON.stringify({
                                        userid: userId,
                                        prizeid: popupAmount
                                    })
                                }).then(res =>{
                                    setTimeout(() =>{
                                        toggleTranslates([takeBtn], "loader_ready")
                                        toggleClasses([takeBtn], "done")
                                        setCardState(prizeItems, res.user.prizes, res.user.points)
                                        setLastUpdatedText(lastUpd, res.user.lastUpdated, locale);
                                        setTimeout(() =>{
                                            confirmPrize(popup, itemPrize);
                                        }, 100)
                                    }, 500)
                                })

                            }

                            return;
                        }

                        // хрестик щоб закривав попап
                        if (closeBtn) {
                            closeAllPopups();
                            return;
                        }

                        // закриваєм попап якщо клікнули за його межами
                        if(openPopupEl){
                            // console.log(openPopupEl)
                            const contentWrap = openPopupEl.querySelector('.popup__wrap');
                            // console.log(contentWrap);
                            const closeBtn = openPopupEl.querySelector('.popup__close');
                            const cancelBtn = openPopupEl.querySelector('.btn-cancel');
                            if (contentWrap && !contentWrap.contains(e.target)) {
                                closeAllPopups();
                            }
                            if(e.target === closeBtn || e.target === cancelBtn) {
                                closeAllPopups();
                            }
                        }
                    })

                })
            }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}?nocache=1`)
            .then(json => {
                i18nData = json;
                translate();
            });
    }

    function checkUserAuth() {
        console.log(userId)
        lastUpd.classList.add('hide');
        setProgress(pointsBar, 0)
        setCardState(prizeItems, [], 0)
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
            }
            return request(`/favuser/${userId}?nocache=1`)
                .then(res => {
                    if (res.userid) {
                        userPoints = res.points;
                        participateBtns.forEach(item => item.classList.add('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                        isVerifiedUser = true;
                        setProgress(pointsBar, userPoints)

                        const lastUpdLocale = locale === "uk" ? 'uk-UA' : "en-US"

                        lastUpd.classList.remove('hide');
                        setLastUpdatedText(lastUpd, res.lastUpdated, locale);
                        setCardState(prizeItems, res.prizes, userPoints)

                    } else {
                        participateBtns.forEach(item => item.classList.remove('hide'));
                        redirectBtns.forEach(item => item.classList.add('hide'));
                        isVerifiedUser = false;
                    }

                })
        } else {
            for (let redirectBtn of redirectBtns) {
                redirectBtn.classList.add('hide');
            }
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }

            return Promise.resolve(false);
        }
    }

    function reportError(err) {
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        let baseCssClass = ""
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    function renderUsers(weekNum, userData = []) {
        weekNum = Number(weekNum);
        userData = userData.find(week => {
            return week.week === weekNum
        }).users;

        console.log(userData);

        const currentUser = userData.find(user => user.userid === userId);

        console.log(userId)
        console.log(currentUser)
        console.log(isVerifiedUser)

        if(userId && !currentUser && isVerifiedUser){
            userData = [...userData, {userid: userId, points: 0}]
        }
        console.log(userData);

        populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
    }

    function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {

        console.log(users);
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;

        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);

        const topUsersLength = !userId || isTopCurrentUser  ? 13 : 10;

        const topUsers = users.slice(0, topUsersLength);

        // console.log(users);
        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        // console.log(isTopCurrentUser)
        console.log(isVerifiedUser)
        if(isVerifiedUser && !currentUser) {
            console.log('user verified');
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
        if (!isTopCurrentUser && currentUser) {
            isVerifiedUser = false;
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }


    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {

        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${Number(userData.points).toFixed(2)}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }


    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 3) return `prize_${week}-${place}`;
        if (place <= 10) return `prize_${week}-4-10`;
        if (place <= 25) return `prize_${week}-11-25`;
        if (place <= 50) return `prize_${week}-26-50`;
        if (place <= 75) return `prize_${week}-51-75`;
        if (place <= 100) return `prize_${week}-76-100`;
        if (place <= 125) return `prize_${week}-101-125`;
        if (place <= 150) return `prize_${week}-126-150`;
        if (place <= 175) return `prize_${week}-151-175`;
        if (place <= 200) return `prize_${week}-176-200`;
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                }, 1000)

            })
            .catch(err => {
                console.error('API request failed:', err);

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

                return Promise.reject(err);
            });
    }
    function openPopupByAttr(popupAttr) {

        const allPopups = document.querySelectorAll('.popup');
        allPopups.forEach(p => p.classList.remove('active'));
        mainPage.classList.add('overlay');

        const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
        console.log(targetPopup)
        console.log(popupAttr)
        if (targetPopup) {
            document.body.style.overflow = 'hidden';
            targetPopup.classList.add('active');
            // mainPage.classList.add('overlay');
            document.querySelector('.popups').classList.remove('_opacity');
        }
    }
    function closeAllPopups() {
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        document.querySelector('.popups').classList.add('_opacity');
        document.body.style.overflow = 'auto';
        mainPage.classList.remove('overlay');
    }

    loadTranslations()
        .then(init) // запуск ініту сторінки


    // setTimeout(hideLoader, 600);

    function initCountdown(selector, startTime, endTime, elem) {
        const container = elem.querySelector(selector)
        console.log(container)
        if (!container) return

        container.innerHTML = `
        <div class="timer">
            <span class="days">00</span>Д :
            <span class="hours">00</span>Г :
            <span class="minutes">00</span>Х
        </div>
        <div class="progress">
            <div class="progress__bar"></div>
        </div>
    `

        const daysEl = container.querySelector('.days')
        const hoursEl = container.querySelector('.hours')
        const minutesEl = container.querySelector('.minutes')
        const progressBar = container.querySelector('.progress__bar')

        const start = new Date(startTime).getTime()
        const end = new Date(endTime).getTime()
        const total = end - start

        function update() {
            const now = Date.now()
            const diff = end - now

            // Якщо таймер закінчився
            if (diff <= 0) {
                console.log("end")
                daysEl.textContent = '00'
                hoursEl.textContent = '00'
                minutesEl.textContent = '00'
                progressBar.style.width = '100%'
                clearInterval(interval)
                showNextMatch()
                return
            }

            // Таймер: скільки залишилось до кінця
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((diff / (1000 * 60)) % 60)

            daysEl.textContent = String(days).padStart(2, '0')
            hoursEl.textContent = String(hours).padStart(2, '0')
            minutesEl.textContent = String(minutes).padStart(2, '0')

            // Прогрес: скільки вже минуло від startTime до endTime
            const elapsed = now - start
            const percent = Math.min(Math.max((elapsed / total) * 100, 0), 100)
            progressBar.style.width = percent + '%'
        }

        update()
        const interval = setInterval(update, 1000)
    }


    function setProgress(el, points) {
        const checkpoints = [
            { p: 0, v: 0 },
            { p: 5, v: 8.4 },
            { p: 10, v: 21.2 },
            { p: 25, v: 34.1 },
            { p: 40, v: 46.8 },
            { p: 45, v: 59.4 },
            { p: 50, v: 72.2 },
            { p: 85, v: 85 },
            { p: 100, v: 96 },
        ];

        if (window.innerWidth <= 600) {
            const newValues = [8, 20.9, 33.9, 46.9, 59.8, 72.8, 85.6, 98.3];
            checkpoints.forEach((point, index) => {
                if (index > 0) point.v = newValues[index - 1];
            });
        }

        const getProgress = (points) => {
            if (points <= checkpoints[0].p) return checkpoints[0].v;
            if (points >= checkpoints.at(-1).p) return checkpoints.at(-1).v;

            for (let i = 0; i < checkpoints.length - 1; i++) {
                const { p: p1, v: v1 } = checkpoints[i];
                const { p: p2, v: v2 } = checkpoints[i + 1];
                if (points >= p1 && points <= p2) {
                    const ratio = (points - p1) / (p2 - p1);
                    return v1 + ratio * (v2 - v1);
                }
            }
            return 0; // запасний варіант, щоб уникнути undefined
        }

        const progressValue = getProgress(points);
        const percent = Number.isFinite(progressValue) ? progressValue.toFixed(2) : "0";
        const topCounterOfPoints = document.querySelector(".progress-top")


        const fadeValue = window.innerWidth <= 600 ? 98 : 91

        if(points >= fadeValue){
            topCounterOfPoints.classList.add('hide')
        }

        const fill = el.querySelector('.progress-fill');
        const label = el.querySelector('.progress-label');

        fill.style.height = percent + "%";
        topCounterOfPoints.textContent = `${points}/100`
        label.textContent = `${points}/100`;
    }

    function setCardState(cards, userPrizes = [], userPoints){
        cards.forEach(card => {
            const pointsCardValue = Number(card.getAttribute('data-amount-points'));
            let isTakenPrize = userPrizes.includes(id => id === pointsCardValue)

            if(userPoints >= pointsCardValue){
                if(isTakenPrize){
                    setWonItem(card)
                }
                setActiveItem(card)
            }else{
                setLockItem(card)
            }

        })
    }


// TEST

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn-popup")?.addEventListener("click", () => {
            document.querySelector(".menu-test-popup")?.classList.toggle("hide");
        });
    });

    document.querySelectorAll(".popup-test").forEach((el) => {
        el.addEventListener("click", () => {
            const attr = el.getAttribute("data-popup");
            openPopupByAttr(attr);
        })
    })

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")
    const betBtn = document.querySelector(".btn-bet-online")

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "777777")
        }
        window.location.reload()
    });


    const btnActiveAll = document.querySelector('.active-all');
    const btnLockAll = document.querySelector('.lock-all');
    const btnWonAll = document.querySelector('.won-all');

    btnActiveAll.addEventListener('click', () => {
        prizeItems.forEach(item => setActiveItem(item));
    });

    btnLockAll.addEventListener('click', () => {
        prizeItems.forEach(item => setLockItem(item));
    });

    btnWonAll.addEventListener('click', () => {
        prizeItems.forEach(item => setWonItem(item));
    });

    document.querySelectorAll('[data-test-id]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.getAttribute('data-test-id'));
            showNextMatch(id);
        });
    });

    document.querySelector(".match-test").addEventListener('click', () => {
        document.querySelector(".menu-test-match").classList.toggle("hide");
    })


})();
