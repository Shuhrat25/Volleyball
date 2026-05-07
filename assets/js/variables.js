var root = document.querySelector(':root');

const loginContainer = document.querySelector('.login_container'),
      loginBox = loginContainer.querySelector('.login_container .login_box'),
      loginBtn = loginBox.querySelector('button'),
      logoutBtn = document.querySelectorAll('.logout'),
      loginInputText = loginBox.querySelector('.input_box input[type="text"]'),
      loginInputPassword = loginBox.querySelector('.input_box input[type="password"]'),
      volleyballUser = document.querySelectorAll('.volleyball_user');

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const menuBtns = document.querySelectorAll('.sidebar1 ul li'),
      popupShowHide = document.querySelectorAll('.customize-theme'),
      fontSizes = document.querySelectorAll('.choose-size li'),
      colorPalette = document.querySelectorAll('.choose-color li'),
      chooseBg = document.querySelectorAll('.choose-bg li'),
      middleItems = document.querySelectorAll('.middle main'),
      products = document.querySelectorAll('.product'),
      catalogContents = document.querySelectorAll('.catalog .content'),
      loader = document.querySelector('.loader-container'),
      mainSearch = document.getElementById('mainSearch'),
      // searchListBox = document.querySelector('.search_list'),
      profileMenu = document.querySelector('.user .profile-photo'),
      exitBox = document.querySelector('.exit_menu'),
      profilePhoto = document.querySelector('.profile-photo img'),
      profileMenuBtn = document.querySelectorAll('.profile_menu ul li'),
      form = document.querySelectorAll('.login_popup .card form'),
      formLabel = document.querySelectorAll('.login_popup .card form small span');



const sideLinks1 = document.querySelectorAll('.sidebar .side-menu-1 li'),
      menuBar = document.querySelector('.content nav i'),
      sideBar = document.querySelector('.sidebar'),
      toggler = document.getElementById('theme-toggle'),
      mains = document.querySelectorAll('.content main'),
      etirozlar = document.querySelectorAll('.etiroz li'),
      pswBtn = document.querySelector('.password i'),
      pswInput = document.querySelector('#password'),
      btnLabel = document.querySelectorAll('.add-button'),
      personBtn = document.querySelectorAll('.ishchi ul li'),
      addBtn = document.querySelectorAll('.add-button'),
      personBox = document.querySelectorAll('.person_box_container .person_box'),
      addBox = document.querySelectorAll('.add_box_container .add_box'),
      count = document.querySelector('.count'),
      shopBox = document.querySelector('.shop_box'),
      zakazSoni = document.querySelector('.zakaz_soni'),
      tableList = document.querySelector('#myTable1 tbody'),
      boxPrays = document.querySelectorAll('.box_prays li'),
      catalogContents1 = document.querySelectorAll('.vazifa .bottom-data .vazifa_list'),
      tableBox = document.querySelectorAll('.table_box .table');