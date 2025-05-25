// Password protection
const passwordOverlay = document.getElementById('password-overlay');
const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-password');
const errorMessage = document.getElementById('error-message');

const correctPassword = "1999";

function checkPassword() {
  const enteredPassword = passwordInput.value;
  if (enteredPassword === correctPassword) {
    passwordOverlay.style.display = 'none';
  } else {
    errorMessage.textContent = 'Incorrect password';
    passwordInput.value = '';
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 1000);
  }
}

submitButton.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkPassword();
  }
});

// Data structure for artists, palf, and truvatos
const data = {
  artists: [
    { id: 'daddy-yankee', name: 'DADDY YANKEE', reportUrls: ['https://lookerstudio.google.com/embed/reporting/0114febd-b174-4d34-8e78-f6b10a94535f/page/gnpEF'] },
    { id: 'bts', name: 'BTS', reportUrls: ['https://lookerstudio.google.com/embed/reporting/0ec3d1cf-547b-4e66-8c81-77921c1cab64/page/gnpEF'] },
    { id: 'chicocurlyhead', name: 'CHICOCURLYHEAD', reportUrls: ['https://lookerstudio.google.com/embed/reporting/2cdea0f6-6583-4f4d-8500-b0a58e677dc6/page/gnpEF'] },
    { id: 'magna', name: 'MAGNA', reportUrls: ['https://lookerstudio.google.com/embed/reporting/d53caf15-04e7-4737-b2ab-d9b47a9752e9/page/gnpEF'] },
    { id: 'adrian-cota', name: 'ADRIAN COTA', reportUrls: ['https://lookerstudio.google.com/embed/reporting/a1f0ea40-c3b2-4df5-979d-4ab132a2b7ec/page/gnpEF'] },
    { id: 'meme-del-real', name: 'MEME DEL REAL', reportUrls: ['https://lookerstudio.google.com/embed/reporting/ce6d6f8f-4e3e-458f-ad76-7bd16651cd52/page/gnpEF'] },
    { id: 'andrea-ele', name: 'ANDREA ELE', reportUrls: ['https://lookerstudio.google.com/embed/reporting/andrea-ele-report-id/page/p_andreaele'] },
    { id: 'america-fernandez', name: 'AMÉRICA FERNÁNDEZ', reportUrls: ['https://lookerstudio.google.com/embed/reporting/01360d8d-5515-477c-819d-11ecba384212/page/gnpEF'] },
  ],
  palf: {
    bands: [
      { id: 'grupo-destino', name: 'GRUPO DESTINO' },
      { id: 'muzsa', name: 'MUZSA' },
      { id: 'jugada-maestra', name: 'JUGADA MAESTRA' },
    ],
    socialMedia: [
      // Reordered: Facebook and YouTube first
      { id: 'facebook', name: 'FACEBOOK', icon: 'Facebook', palfReportUrl: 'https://lookerstudio.google.com/embed/reporting/43a608b8-7c3d-4ba2-a08a-21991d52dcd7/page/gnpEF' },
      { id: 'youtube', name: 'YOUTUBE', icon: 'YouTube', palfReportUrl: 'https://lookerstudio.google.com/embed/reporting/04f24418-0f58-405e-adf0-4a99882f32b8/page/gnpEF' },
      { id: 'twitter', name: 'X (TWITTER)', icon: 'X', palfReportUrl: 'https://lookerstudio.google.com/embed/reporting/e1c63634-b541-44ef-af28-77c27ff63e0b/page/gnpEF' },
      { id: 'instagram', name: 'INSTAGRAM', icon: 'Instagram', palfReportUrl: 'https://lookerstudio.google.com/embed/reporting/ec282e0b-ed12-4e16-938b-b938328b5cda/page/gnpEF' },
      { id: 'tiktok', name: 'TIKTOK (WORKING)', icon: 'TikTok', palfReportUrl: 'https://lookerstudio.google.com/embed/reporting/67fbf071-b615-4ff7-a63f-9041fd059a88/page/gnpEF' },
      { id: 'public-relations', name: 'PUBLIC RELATIONS', icon: 'Public Relations', palfReportUrl: 'https://dancing-swan-64a0b2.netlify.app/' },
    ],
  },
  truvatos: [
    { id: 'twitter', name: 'X (TWITTER)', icon: 'X', truvatosReportUrl: 'https://lookerstudio.google.com/embed/reporting/b4a8cec2-b9a5-4db4-8370-c9594f08c39d/page/gnpEF' },
    { id: 'instagram', name: 'INSTAGRAM', icon: 'Instagram', truvatosReportUrl: 'https://lookerstudio.google.com/embed/reporting/b4a8cec2-b9a5-4db4-8370-c9594f08c39d/page/gnpEF' },
    { id: 'youtube', name: 'YOUTUBE', icon: 'YouTube', truvatosReportUrl: 'https://lookerstudio.google.com/embed/reporting/b4a8cec2-b9a5-4db4-8370-c9594f08c39d/page/gnpEF' },
    { id: 'tiktok', name: 'TIKTOK (WORKING)', icon: 'TikTok', truvatosReportUrl: 'https://lookerstudio.google.com/embed/reporting/b4a8cec2-b9a5-4db4-8370-c9594f08c39d/page/gnpEF' },
    { id: 'public-relations', name: 'PUBLIC RELATIONS', icon: 'Public Relations', truvatosReportUrl: 'https://lookerstudio.google.com/embed/reporting/b4a8cec2-b9a5-4db4-8370-c9594f08c39d/page/gnpEF' },
    { id: 'facebook', name: 'FACEBOOK', icon: 'Facebook', truvatosReportUrl: 'https://lookerstudio.google.com/embed/reporting/b4a8cec2-b9a5-4db4-8370-c9594f08c39d/page/gnpEF' },
  ]
};

let selectedPalfBandId = null;

const navButtons = document.querySelectorAll('.nav-button');
const contentSections = document.querySelectorAll('.content-section');
const sidebarTab = document.querySelector('.sidebar-tab');
const body = document.body;
const palfBandButtonsContainer = document.getElementById('palf-band-buttons');

function toggleSidebar() {
  const isOpen = body.classList.toggle('sidebar-open');
  sidebarTab.setAttribute('aria-expanded', isOpen);
}

sidebarTab.addEventListener('click', toggleSidebar);
sidebarTab.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    toggleSidebar();
  }
});

function populateSidebar(sectionId, items) {
  const listElement = document.getElementById(`${sectionId}-list`);
  if (!listElement) return;

  listElement.innerHTML = '';

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    listItem.dataset.itemId = item.id;
    listItem.addEventListener('click', (event) => handleSelection(event, items));
    listElement.appendChild(listItem);
  });
}

function createPanels(sectionId, items) {
  const gridContainer = document.getElementById(`${sectionId}-grid-container`);
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  items.forEach(item => {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.dataset.itemId = item.id;

    const panelHeader = document.createElement('div');
    panelHeader.classList.add('panel-header');

    const panelTitle = document.createElement('span');
    panelTitle.classList.add('panel-title');
    panelTitle.textContent = `${item.name} Panel`;

    const panelIcon = document.createElement('span');
    panelIcon.classList.add('material-icons');
    panelIcon.textContent = 'insert_chart';

    panelHeader.appendChild(panelTitle);
    panelHeader.appendChild(panelIcon);

    const panelContent = document.createElement('div');
    panelContent.classList.add('panel-content');

    const iframe = document.createElement('iframe');
    iframe.title = `${item.name} Panel`;
    iframe.frameborder = "0";
    iframe.style.border = "0";
    iframe.allowfullscreen = true;
    iframe.sandbox = "allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
    iframe.src = 'about:blank';

    panelContent.appendChild(iframe);
    panel.appendChild(panelHeader);
    panel.appendChild(panelContent);
    gridContainer.appendChild(panel);
  });
}

function handleSelection(event, items) {
  const selectedLi = event.target;
  const itemId = selectedLi.dataset.itemId;
  const selectedItem = items.find(item => item.id === itemId);

  if (!selectedItem) return;

  const activeSection = document.querySelector('.content-section.active');
  if (!activeSection) return;

  const currentTabId = activeSection.id;

  if (currentTabId === 'palf' && itemId === 'public-relations' && selectedItem.palfReportUrl) {
    window.location.href = selectedItem.palfReportUrl;
    return;
  }

  const currentGridContainer = activeSection.querySelector('.grid-container');
  if (!currentGridContainer) return;

  currentGridContainer.querySelectorAll('.panel').forEach(panel => {
    panel.classList.remove('active-panel');
    const iframe = panel.querySelector('iframe');
    if (iframe) {
      iframe.src = 'about:blank';
    }
  });

  const targetPanel = currentGridContainer.querySelector(`.panel[data-item-id="${itemId}"]`);
  if (targetPanel) {
    targetPanel.classList.add('active-panel');
    const iframe = targetPanel.querySelector('iframe');
    if (iframe) {
      let targetUrl = 'about:blank';
      if (currentTabId === 'palf') {
         targetUrl = selectedItem.palfReportUrl || 'about:blank';
      } else if (currentTabId === 'artists' && selectedItem.reportUrls && selectedItem.reportUrls.length > 0) {
        targetUrl = selectedItem.reportUrls[0];
      } else if (currentTabId === 'truvatos' && selectedItem.truvatosReportUrl) {
        targetUrl = selectedItem.truvatosReportUrl;
      }
      iframe.src = targetUrl;
    }
  }

  const currentList = activeSection.querySelector('ul');
  if (currentList) {
    currentList.querySelectorAll('li').forEach(li => {
      li.classList.remove('active');
    });
    selectedLi.classList.add('active');
  }
}

function switchTab(tabId) {
  navButtons.forEach(button => button.classList.remove('active'));
  contentSections.forEach(section => section.classList.remove('active'));
  palfBandButtonsContainer.classList.remove('active');

  const activeNavButton = document.querySelector(`.nav-button[data-tab="${tabId}"]`);
  const activeContentSection = document.getElementById(tabId);

  if (activeNavButton && activeContentSection) {
    activeNavButton.classList.add('active');
    activeContentSection.classList.add('active');

    if (tabId === 'artists') {
      populateSidebar('artists', data.artists);
      createPanels('artists', data.artists);
      selectedPalfBandId = null;
      if (data.artists.length > 0) {
        const firstArtistLi = document.querySelector('#artists-list li:first-child');
        if (firstArtistLi) {
           handleSelection({ target: firstArtistLi }, data.artists);
        }
      }
    } else if (tabId === 'palf') {
      populateSidebar('palf', data.palf.socialMedia);
      createPanels('palf', data.palf.socialMedia);
      palfBandButtonsContainer.classList.add('active');
      populatePalfBandButtons();
      selectedPalfBandId = null;
      // Select the first item in the reordered list (Facebook)
      const firstPalfItem = data.palf.socialMedia[0];
      if (firstPalfItem) {
        const firstPalfLi = document.querySelector(`#palf-list li[data-item-id="${firstPalfItem.id}"]`);
        if (firstPalfLi) {
          handleSelection({ target: firstPalfLi }, data.palf.socialMedia);
        }
      }
    } else if (tabId === 'truvatos') {
      populateSidebar('truvatos', data.truvatos);
      createPanels('truvatos', data.truvatos);
      selectedPalfBandId = null;
       if (data.truvatos.length > 0) {
        const firstTruvatoLi = document.querySelector('#truvatos-list li:first-child');
        if (firstTruvatoLi) {
           handleSelection({ target: firstTruvatoLi }, data.truvatos);
        }
      }
    }

    body.classList.add('sidebar-open');
    sidebarTab.setAttribute('aria-expanded', 'true');
  }
}

function populatePalfBandButtons() {
  palfBandButtonsContainer.innerHTML = '';

  data.palf.bands.forEach(band => {
    const button = document.createElement('button');
    button.classList.add('band-button');
    button.textContent = band.name;
    button.dataset.bandId = band.id;
    button.addEventListener('click', () => handlePalfBandSelection(band.id));
    palfBandButtonsContainer.appendChild(button);
  });
}

function handlePalfBandSelection(bandId) {
  selectedPalfBandId = bandId;

  palfBandButtonsContainer.querySelectorAll('.band-button').forEach(button => {
    button.classList.remove('active');
    if (button.dataset.bandId === bandId) {
      button.classList.add('active');
    }
  });

  // After selecting a band, default to the first social media item (Facebook)
  const firstPalfItem = data.palf.socialMedia[0];
  if (firstPalfItem) {
    const firstPalfLi = document.querySelector(`#palf-list li[data-item-id="${firstPalfItem.id}"]`);
    if (firstPalfLi) {
      handleSelection({ target: firstPalfLi }, data.palf.socialMedia);
    }
  }

  body.classList.add('sidebar-open');
  sidebarTab.setAttribute('aria-expanded', 'true');
}

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;
    switchTab(tabId);
  });
});

switchTab('artists');

const privateDataButton = document.getElementById('private-data-button');
if (privateDataButton) {
  privateDataButton.addEventListener('click', () => {
    window.location.href = 'https://data.hybelatinamerica.com/';
  });
}
