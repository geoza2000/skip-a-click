// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const TabGroup = require("electron-tabs");
let tabGroup = new TabGroup();
let tab = tabGroup.addTab({
    title: "Jira",
    src: "https://crowdpolicy2.atlassian.net",
    visible: true
});
let tab1 = tabGroup.addTab({
    title: "Mail",
    src: "http://mail.crowdpolicy.com",
    visible: true
});
let tab2 = tabGroup.addTab({
    title: "Slack",
    src: "https://crowdpolicy.slack.com/",
    visible: true
});