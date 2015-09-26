var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

panel.height = screenGeometry(panel.screen).height > 1024 ? 35 : 35

var kicker = panel.addWidget("org.kde.plasma.kicker")
kicker.currentConfigGroup = ["Shortcuts"]
kicker.writeConfig("global", "Alt+F1")

kicker.currentConfigGroup = ["General"]
kicker.writeConfig("customButtonImage", "file:///usr/share/pixmaps/homerun.svgz")
kicker.writeConfig("favoriteApps", ["systemsettings.desktop", "org.kde.ksysguard.desktop", "octopi.desktop", "vokoscreen.desktop"])
kicker.writeConfig("limitDepth", true)
kicker.writeConfig("useCustomButtonImage", true)

var eitm = panel.addWidget("org.kde.plasma.expandingiconstaskmanager")
eitm.currentConfigGroup = ["Configuration", "General"]
eitm.writeConfig("launchers" ,"file:///usr/share/applications/org.kde.dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/firefox.desktop")
eitm.writeConfig("showOnlyCurrentDesktop", true)

var yakuakeIcon = panel.addWidget("org.kde.plasma.icon")
yakuakeIcon.currentConfigGroup = ["General"]
yakuakeIcon.writeConfig("applicationName", "Yakuake")
yakuakeIcon.writeConfig("genericName", "Drop-down Terminal")
yakuakeIcon.writeConfig("iconName", "yakuake")
yakuakeIcon.writeConfig("url", "/usr/share/applications/kde4/yakuake.desktop")

var pvolumemixer = panel.addWidget("org.kde.plasma.volume")

var systray = panel.addWidget("org.kde.plasma.systemtray")
systray.currentConfigGroup = ["General"]
systray.writeConfig("extraItems","org.kde.plasma.devicenotifier,org.kde.plasma.battery,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.plasma.printmanager,org.kde.ktp-contactlist,org.kde.plasma.ktplegacypresenceapplet,org.kde.muonnotifier,kde.muonnotifier")
systray.writeConfig("hiddenItems","org.kde.plasma.clipboard,kmix,KDE Daemon,org.kde.ktp-contactlist,org.kde.plasma.volume,org.kde.plasma.notifications")
systray.writeConfig("knownItems","org.kde.kdeconnect,org.kde.ktp-contactlist,org.kde.muonnotifier,org.kde.plasma.battery,org.kde.plasma.bluetooth,org.kde.plasma.clipboard,org.kde.plasma.devicenotifier,org.kde.plasma.mediacontroller,org.kde.plasma.networkmanagement,org.kde.plasma.notifications,org.kde.plasma.printmanager,org.kde.plasma.volume")
systray.writeConfig("shownItems", "transmission")

panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.notifications")

var krunnerIcon = panel.addWidget("org.kde.plasma.icon")
krunnerIcon.currentConfigGroup = ["General"]
krunnerIcon.writeConfig("applicationName", "Krunner")
krunnerIcon.writeConfig("iconName", "applications-system")
krunnerIcon.writeConfig("url", "/usr/share/applications/krunner.desktop")
