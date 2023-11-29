import { MenuTask } from "../tasks"
import { config } from "../../package.json"


export async function menuAction(task: MenuTask) {
    const mode = Zotero.Prefs.get(`${config.addonRef}.menu.mode`) as number
    const args = (Zotero.Prefs.get(`${config.addonRef}.menu.args`) as string).split(/\s*,\s*/).map(el => el.trim().replace(/^\"|\"$/g, "")).filter(el => el) as Array<any>
    (args as Array<any>).push(task)
    if (mode == 1) {
        const content = await OS.File.read(Zotero.Prefs.get(`${config.addonRef}.menu.jsPath`) as string, { encoding: "utf-8" }) as string;
        // new Function(content)(task)
        eval(content)
    } else if (mode == 2) {
        await Zotero.Utilities.Internal.exec(Zotero.Prefs.get(`${config.addonRef}.menu.cmd`) as string, args)
    } else if (mode == 3) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(args),
        };

        fetch(Zotero.Prefs.get(`${config.addonRef}.menu.url`) as string, requestOptions)
            .catch(error => ztoolkit.log('error', error));
    }
}