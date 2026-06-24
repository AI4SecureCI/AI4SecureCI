function dl_module(moduleName) {
    const downloads = {"module-3": "downloads/module-3.zip", "module-4": "downloads/module-4.zip"};
    const target = downloads[moduleName];
    if (!target) { alert("No download is configured for " + moduleName + " yet."); return; }
    alert("Add the file '" + target + "' to enable this download. For now, this is a placeholder.");
}
