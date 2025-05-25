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

let activeTab = 'artists'; // Keep track of the active main tab
let selectedItemId = null; // Keep track of the selected item (artist, social media, band)
let selectedBandId = null; // Keep track of the selected PALF band

const navButtons = document.querySelectorAll('.nav-button');
const contentSections = document.querySelectorAll('.content-section');
const panelsSections = document.querySelectorAll('.panels-section');

const artistsMenu = document.getElementById('artists-menu');
const palfMenu = document.getElementById('palf-menu');
const truvatosMenu = document.getElementById('truvatos-menu');

const artistsList = document.getElementById('artists-list');
const palfSocialList = document.getElementById('palf-social-list');
const palfBandsList = document.getElementById('palf-bands-list');
const truvatosSocialList = document.getElementById('truvatos-social-list');


// --- Menu Population Functions ---

function populateArtistsMenu() {
  artistsList.innerHTML = '';
  data.artists.forEach(artist => {
    const listItem = document.createElement('li');
    listItem.textContent = artist.name;
    listItem.dataset.itemId = artist.id;

    const subMenu = document.createElement('ul');
    subMenu.classList.add('sub-menu');

    // Add social media links to sub-menu (using PALF social media structure for consistency)
    data.palf.socialMedia.forEach(social => {
        const subListItem = document.createElement('li');
        subListItem.textContent = social.name;
        subListItem.dataset.itemId = artist.id; // Artist ID
        subListItem.dataset.socialId = social.id; // Social Media ID
        subListItem.dataset.type = 'artist-social'; // Type indicator
        subMenu.appendChild(subListItem);
    });

    listItem.appendChild(subMenu);
    artistsList.appendChild(listItem);
  });
}

function populatePalfMenu() {
  palfSocialList.innerHTML = '';
  palfBandsList.innerHTML = '';

  // Populate Social Media Column
  data.palf.socialMedia.forEach(social => {
    const listItem = document.createElement('li');
    listItem.textContent = social.name;
    listItem.dataset.itemId = social.id;
    listItem.dataset.type = 'palf-social'; // Type indicator
    palfSocialList.appendChild(listItem);
  });

  // Populate Bands Column
  data.palf.bands.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band.name;
    listItem.dataset.itemId = band.id;

    const subMenu = document.createElement('ul');
    subMenu.classList.add('sub-menu');

    // Add social media links to sub-menu for each band
    data.palf.socialMedia.forEach(social => {
        const subListItem = document.createElement('li');
        subListItem.textContent = social.name;
        subListItem.dataset.itemId = band.id; // Band ID
        subListItem.dataset.socialId = social.id; // Social Media ID
        subListItem.dataset.type = 'palf-band-social'; // Type indicator
        subMenu.appendChild(subListItem);
    });

    listItem.appendChild(subMenu);
    palfBandsList.appendChild(listItem);
  });
}

function populateTruvatosMenu() {
  truvatosSocialList.innerHTML = '';
  data.truvatos.forEach(social => {
    const listItem = document.createElement('li');
    listItem.textContent = social.name;
    listItem.dataset.itemId = social.id;
    listItem.dataset.type = 'truvatos-social'; // Type indicator
    truvatosSocialList.appendChild(listItem);
  });
}

// --- Panel Creation ---

function createPanels(sectionId, items) {
  const gridContainer = document.getElementById(`${sectionId}-grid-container`);
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  // Create a single panel for the active section
  const panel = document.createElement('div');
  panel.classList.add('panel');
  panel.id = `${sectionId}-main-panel`; // Give it a unique ID

  const panelHeader = document.createElement('div');
  panelHeader.classList.add('panel-header');

  const panelTitle = document.createElement('span');
  panelTitle.classList.add('panel-title');
  panelTitle.textContent = `${sectionId.toUpperCase()} Data Panel`; // Dynamic title

  const panelIcon = document.createElement('span');
  panelIcon.classList.add('material-icons');
  panelIcon.textContent = 'insert_chart';

  panelHeader.appendChild(panelTitle);
  panelHeader.appendChild(panelIcon);

  const panelContent = document.createElement('div');
  panelContent.classList.add('panel-content');

  const iframe = document.createElement('iframe');
  iframe.title = `${sectionId.toUpperCase()} Data Panel`;
  iframe.frameborder = "0";
  iframe.style.border = "0";
  iframe.allowfullscreen = true;
  iframe.sandbox = "allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
  iframe.src = 'about:blank'; // Start blank

  panelContent.appendChild(iframe);
  panel.appendChild(panelHeader);
  panel.appendChild(panelContent);
  gridContainer.appendChild(panel);

  // Activate the single panel
  panel.classList.add('active-panel');
}


// --- Handle Menu Item Clicks ---

function handleMenuItemClick(event) {
    const targetLi = event.target.closest('li');
    if (!targetLi) return;

    const itemId = targetLi.dataset.itemId;
    const socialId = targetLi.dataset.socialId; // For sub-menu items
    const itemType = targetLi.dataset.type; // For main menu items

    // Remove active class from all list items in all menus
    document.querySelectorAll('.hover-menu li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.sub-menu li').forEach(li => li.classList.remove('active'));

    // Add active class to the clicked item
    targetLi.classList.add('active');
    // If it's a sub-menu item, also activate its parent
    if (targetLi.closest('.sub-menu')) {
        targetLi.closest('li').classList.add('active');
    }


    let targetUrl = 'about:blank';
    let panelTitle = `${activeTab.toUpperCase()} Data Panel`;

    if (activeTab === 'artists') {
        const artist = data.artists.find(a => a.id === itemId);
        if (artist && socialId) { // Clicked a social link in an artist sub-menu
             // Find the corresponding social media data to get the URL structure
            const socialMedia = data.palf.socialMedia.find(s => s.id === socialId);
            if (socialMedia && artist.reportUrls && artist.reportUrls.length > 0) {
                 // Assuming the first URL in reportUrls is the main one for the artist
                 // This might need adjustment if different social media need different URLs per artist
                 targetUrl = artist.reportUrls[0]; // Use the artist's main report URL for now
                 panelTitle = `${artist.name} - ${socialMedia.name} Panel`;
            }
        } else if (artist) { // Clicked an artist name (shouldn't load panel, just open sub-menu)
             // Do nothing, hover handles sub-menu display
             return;
        }
    } else if (activeTab === 'palf') {
        if (itemType === 'palf-social') { // Clicked a social link in the main PALF social column
            const social = data.palf.socialMedia.find(s => s.id === itemId);
            if (social && social.palfReportUrl) {
                 if (social.id === 'public-relations') {
                    window.location.href = social.palfReportUrl; // Redirect for Public Relations
                    return;
                 }
                targetUrl = social.palfReportUrl;
                panelTitle = `PALF - ${social.name} Panel`;
            }
            selectedBandId = null; // No band selected when clicking main social links
        } else if (itemType === 'palf-band-social') { // Clicked a social link in a band sub-menu
            const band = data.palf.bands.find(b => b.id === itemId); // itemId is bandId here
            const social = data.palf.socialMedia.find(s => s.id === socialId); // socialId is the social media ID
             if (band && social && social.palfReportUrl) {
                 if (social.id === 'public-relations') {
                    window.location.href = social.palfReportUrl; // Redirect for Public Relations
                    return;
                 }
                // For now, using the general PALF social URL for band social links
                // This might need adjustment if bands have specific social URLs
                targetUrl = social.palfReportUrl;
                panelTitle = `${band.name} - ${social.name} Panel`;
            }
            selectedBandId = itemId; // Set the selected band
        } else { // Clicked a band name (shouldn't load panel, just open sub-menu)
             // Do nothing, hover handles sub-menu display
             selectedBandId = itemId; // Set the selected band
             return;
        }
    } else if (activeTab === 'truvatos') {
        if (itemType === 'truvatos-social') { // Clicked a social link in the main TRUVATOS social column
            const social = data.truvatos.find(s => s.id === itemId);
            if (social && social.truvatosReportUrl) {
                 if (social.id === 'public-relations') {
                    window.location.href = social.truvatosReportUrl; // Redirect for Public Relations
                    return;
                 }
                targetUrl = social.truvatosReportUrl;
                panelTitle = `TRUVATOS - ${social.name} Panel`;
            }
        }
    }

    // Update the iframe source and panel title
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        const mainPanel = activeSection.querySelector('.panel');
        if (mainPanel) {
            const iframe = mainPanel.querySelector('iframe');
            const titleSpan = mainPanel.querySelector('.panel-title');
            if (iframe) {
                iframe.src = targetUrl;
            }
            if (titleSpan) {
                titleSpan.textContent = panelTitle;
            }
        }
    }
}


// --- Tab Switching Logic ---

function switchTab(tabId) {
  activeTab = tabId;

  // Deactivate all nav buttons and content sections
  navButtons.forEach(button => button.classList.remove('active'));
  contentSections.forEach(section => section.classList.remove('active'));

  // Activate the selected nav button and content section
  const activeNavButton = document.querySelector(`.nav-button[data-tab="${tabId}"]`);
  const activeContentSection = document.getElementById(tabId);

  if (activeNavButton && activeContentSection) {
    activeNavButton.classList.add('active');
    activeContentSection.classList.add('active');

    // Create the single panel for the active section
    createPanels(tabId, []); // Pass empty array as items are handled by menu clicks

    // Populate the correct hover menu and attach event listeners
    if (tabId === 'artists') {
      populateArtistsMenu();
      artistsList.addEventListener('click', handleMenuItemClick);
      palfMenu.removeEventListener('click', handleMenuItemClick);
      truvatosMenu.removeEventListener('click', handleMenuItemClick);
    } else if (tabId === 'palf') {
      populatePalfMenu();
      palfMenu.addEventListener('click', handleMenuItemClick);
      artistsMenu.removeEventListener('click', handleMenuItemClick);
      truvatosMenu.removeEventListener('click', handleMenuItemClick);
    } else if (tabId === 'truvatos') {
      populateTruvatosMenu();
      truvatosMenu.addEventListener('click', handleMenuItemClick);
      artistsMenu.removeEventListener('click', handleMenuItemClick);
      palfMenu.removeEventListener('click', handleMenuItemClick);
    }

    // Reset selected items when switching tabs
    selectedItemId = null;
    selectedBandId = null;
  }
}

// --- Initial Setup ---

// Add event listeners to main nav buttons
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;
    switchTab(tabId);
  });
});

// Initial tab switch to 'artists'
switchTab('artists');

// Private Data Button
const privateDataButton = document.getElementById('private-data-button');
if (privateDataButton) {
  privateDataButton.addEventListener('click', () => {
    window.location.href = 'https://data.hybelatinamerica.com/';
  });
}

// Remove sidebar toggle logic (already removed in HTML/CSS)
// const sidebarTab = document.querySelector('.sidebar-tab');
// const body = document.body;
// function toggleSidebar() { ... }
// sidebarTab.addEventListener('click', toggleSidebar);
// sidebarTab.addEventListener('keydown', (e) => { ... });
