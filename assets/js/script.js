function middleBoxShow(dataset) {
    middleItems.forEach(box => {
        if (dataset == box.dataset.box) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    })
}

function popupShowFunc(dataset) {
    popupShowHide.forEach(popup => {
        if (dataset == popup.dataset.popup) {
            popup.classList.add('active');
        } else {
            popup.classList.remove('active');
        }
    })
}

profileMenuBtn.forEach(menu => {
    menu.addEventListener('click', () => {
        profilePhoto.classList.remove('active');
        let menuData = menu.dataset.popup;
        popupShowFunc(menuData)
    })
})

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBtns.forEach(btn2 => {
            btn2.classList.remove('active')
        })
        btn.classList.add('active')

        let boxData = btn.dataset.box;
        let popupData = btn.dataset.popup;

        middleBoxShow(boxData);

        popupShowFunc(popupData);

        if (btn.dataset.box) {
            localStorage.setItem('nav', boxData);
        }
    })
})

window.addEventListener('load', (e) => {

    setTimeout(() => {
        if (loginInputText) loginInputText.value = '';
        if (loginInputPassword) loginInputPassword.value = '';
    }, 100)

    loginInputText.value = '';
    loginInputPassword.value = '';

    if (localStorage.getItem('load') == 'teacher') {
        volleyballUser.forEach(user => {
            if (user.classList.contains('valleyball_teacher')) {
                user.classList.add('active');
            }
        });
    } else if (localStorage.getItem('load') == 'student') {
        volleyballUser.forEach(user => {
            if (user.classList.contains('valleyball_student')) {
                user.classList.add('active');
            }
        });
    } else if (!localStorage.getItem('load') || localStorage.getItem('load') == 'login') {
        volleyballUser.forEach(user => {
            if (user.classList.contains('login_container')) {
                user.classList.add('active');
            } else {
                user.classList.remove('active');
            }
        })
    }

    menuBtns.forEach(btn => {
        if (btn.dataset.box == localStorage.getItem('nav')) {
            btn.click();
        } else if (!localStorage.getItem('nav')) {
            if (btn.dataset.box == 'home') {
                btn.click()
            }
        }
    })

    fontSizes.forEach(btn => {
        if (btn.dataset.id == localStorage.getItem('font-size')) {
            btn.click();
        }
    })

    colorPalette.forEach(btn => {
        if (btn.dataset.primaryhue == localStorage.getItem('color')) {
            btn.click();
        }
    })

    chooseBg.forEach(btn => {
        if (btn.dataset.bg == localStorage.getItem('bg')) {
            btn.click();
        }
    })

    setTimeout(() => {
        loader.classList.add('hide');
    }, 3000)
})

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let sizeData = size.dataset.id;
        let fontSize;

        fontSizes.forEach(size2 => {
            size2.classList.remove('active')
        })
        size.classList.add('active')

        if (sizeData == 1) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if (sizeData == 2) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } else if (sizeData == 3) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } else if (sizeData == 4) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        } else if (sizeData == 5) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }

        localStorage.setItem('font-size', sizeData);

        document.querySelector('html').style.fontSize = fontSize;
    })
})

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let colorData = color.dataset.primaryhue;

        colorPalette.forEach(color2 => {
            color2.classList.remove('active')
        })
        color.classList.add('active')

        root.style.setProperty('--primary-color-hue', colorData)
        localStorage.setItem('color', colorData);
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

const detectDarkMode = event => {
    if (event.matches) {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';
        changeBg();
    } else {
        darkColorLightness = '17%';
        whiteColorLightness = '100%';
        lightColorLightness = '95%';
        changeBg();
    }
}

chooseBg.forEach(bg => {
    bg.addEventListener('click', () => {
        let bgData = bg.dataset.bg;

        chooseBg.forEach(bg2 => {
            bg2.classList.remove('active')
        })
        bg.classList.add('active')

        if (bgData == 1) {
            darkColorLightness = '17%';
            whiteColorLightness = '100%';
            lightColorLightness = '95%';
            changeBg();
        } else if (bgData == 2) {
            darkColorLightness = '95%';
            whiteColorLightness = '20%';
            lightColorLightness = '15%';
            changeBg();
        } else if (bgData == 3) {
            detectDarkMode(darkModeQuery)
        }

        localStorage.setItem('bg', bgData);
    })
})

darkModeQuery.addEventListener('change', e => detectDarkMode(e))

popupShowHide.forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('customize-theme')) {
            popup.classList.remove('active');

            volleyballUser.forEach(user => {
                if (user.classList.contains('active')) {
                    if (user.classList.contains('valleyball_teacher')) {
                        sideLinks1.forEach(btn => {
                            if (btn.dataset.name == localStorage.getItem('nav2')) {
                                btn.click()
                            }
                        });
                    } else if (user.classList.contains('valleyball_student')) {
                        menuBtns.forEach(btn => {
                            if (btn.dataset.box == localStorage.getItem('nav')) {
                                btn.click()
                            }
                        });
                    }
                }
            });

        }
    })
})

catalogContents.forEach(content => {
    let moreLessBtn = content.querySelector('.description .show');
    moreLessBtn.addEventListener('click', () => {
        let moreLessBox = content.querySelector('.description .files');
        if (moreLessBox.classList.contains("less")) {
            moreLessBox.classList.remove("less");
            moreLessBox.classList.add("more");
            moreLessBtn.textContent = "Berkitish";
        } else {
            moreLessBox.classList.remove("more");
            moreLessBox.classList.add("less");
            moreLessBtn.textContent = "Ko'proq ko'rish...";
        }
    });
});

profileMenu.addEventListener('click', () => {
    exitBox.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target) && !exitBox.contains(e.target)) {
        exitBox.classList.remove('active');
    }
});

loginBtn.addEventListener('click', () => {
    if (loginInputText.value == "admin" && loginInputPassword.value == "admin") {
        volleyballUser.forEach(user => {
            if (user.classList.contains('valleyball_teacher')) {
                user.classList.add('active');
                let loadData = localStorage.setItem('load', 'teacher');
            } else {
                user.classList.remove('active');
            }
        })
    } else {
        volleyballUser.forEach(user => {
            if (user.classList.contains('valleyball_student')) {
                user.classList.add('active');
                let loadData = localStorage.setItem('load', 'student');
            } else {
                user.classList.remove('active');
            }
        })
    }
    loginInputText.value = '';
    loginInputPassword.value = '';
});

logoutBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        volleyballUser.forEach(user => {
            if (user.classList.contains('login_container')) {
                user.classList.add('active');
            } else {
                user.classList.remove('active');
            }
        })
        localStorage.setItem('load', 'login');
    })
})