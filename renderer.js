// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const TabGroup = require("electron-tabs");
const dragula = require("dragula");
const Store = require('./store.js');

// First instantiate the class
const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences',
    defaults: {
      // 1 is the default opened tab of our window
      lastActive: 0
    }
  });


let tabGroup = new TabGroup({
    ready: function (tabGroup) {
        dragula([tabGroup.tabContainer], {
            direction: "vertical"
        });
    }
});

let tab1 = tabGroup.addTab({
    title: "",
    iconURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
    src: "http://mail.crowdpolicy.com",
    closable: false
});
let tab = tabGroup.addTab({
    title: '',
    iconURL: 'https://luna1.co/5ad265.png',
    src: "https://crowdpolicy2.atlassian.net",
    closable: false
});

let tab2 = tabGroup.addTab({
    title: "",
    iconURL: 'https://a.slack-edge.com/45901/marketing/img/_rebrand/meta/slack_hash_256.png',
    src: "https://crowdpolicy.slack.com/",
    closable: false
});

var lastActive = store.get('lastActive')
tabGroup.eachTab(function(currentTab,index){
    if(index == lastActive){
        currentTab.activate()
    }
})

tabGroup.on("tab-active", (tab) => {
    store.set('lastActive', tab.id)
 });

 