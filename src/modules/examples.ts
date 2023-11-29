import { config } from "../../package.json";
import { getString } from "../utils/locale";
import { addMenuTask, MenuTask } from "../tasks"

export class BasicExampleFactory {
  static registerPrefs() {
    const prefOptions = {
      pluginID: config.addonID,
      src: rootURI + "chrome/content/preferences.xhtml",
      label: getString("prefs-title"),
      image: `chrome://${config.addonRef}/content/icons/favicon.svg`,
      defaultXUL: true,
    };
    ztoolkit.PreferencePane.register(prefOptions);
  }
}

export class UIExampleFactory {
  static registerStyleSheet() {
    const styles = ztoolkit.UI.createElement(document, "link", {
      properties: {
        type: "text/css",
        rel: "stylesheet",
        href: `chrome://${config.addonRef}/content/zoteroPane.css`,
      },
    });
    document.documentElement.appendChild(styles);
  }
  static registerRightClickMenuItem() {
    const menuIcon = `chrome://${config.addonRef}/content/icons/favicon@0.5x.svg`;
    // item menuitem with icon
    ztoolkit.Menu.register("item", {
      tag: "menuitem",
      id: "zotero-action-cmd-menu",
      label: getString("menuitem-label"),
      commandListener: (ev) => {
        addon.hooks.onMenuActionInBatch(
          ZoteroPane.getSelectedItems(true)
            .map((id) => addMenuTask(id))
            .filter((task) => task) as MenuTask[]
        );
      },
      icon: menuIcon,
    });
  }
}