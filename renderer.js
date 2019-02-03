// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const TabGroup = require("electron-tabs");
let tabGroup = new TabGroup();
let tab = tabGroup.addTab({
    title: '',
    iconURL: 'https://luna1.co/5ad265.png',
    src: "https://crowdpolicy2.atlassian.net",
    visible: true,
    closable: false
});
let tab1 = tabGroup.addTab({
    title: "",
    iconURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
    src: "http://mail.crowdpolicy.com",
    visible: true,
    closable: false
});
let tab2 = tabGroup.addTab({
    title: "",
    iconURL: 'https://a.slack-edge.com/45901/marketing/img/_rebrand/meta/slack_hash_256.png',
    src: "https://crowdpolicy.slack.com/",
    visible: true,
    closable: false
});