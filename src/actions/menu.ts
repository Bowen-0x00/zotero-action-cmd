import { MenuTask } from "../tasks"
import { config } from "../../package.json"


export async function menuAction(task: MenuTask) {
    const jsOrCmd = Zotero.Prefs.get(`${config.addonRef}.menu.jsOrCmd`) as boolean
    const args = (Zotero.Prefs.get(`${config.addonRef}.menu.args`) as string).split(/\s*,\s*/).map(el => el.trim().replace(/^\"|\"$/g, "")).filter(el => el)
    args.push(`"${JSON.stringify(task)}"`)
    if (jsOrCmd) {
        const content = await OS.File.read(Zotero.Prefs.get(`${config.addonRef}.menu.jsPath`) as string, { encoding: "utf-8" }) as string;
        // new Function(content)(task)
        eval(content)
    } else {
        await Zotero.Utilities.Internal.exec(Zotero.Prefs.get(`${config.addonRef}.menu.cmd`) as string, args)
    }
}