export interface MenuTask {
    id: string,
    pdfUrl: string
}

export function addMenuTask(
    itemId: number
) {
    const item = Zotero.Items.get(itemId);
    // item.getBestAttachment()
    if (item?.isRegularItem()) {
        const attachments = item.getAttachments();
        if (attachments && attachments.length) {
            const attachment = Zotero.Items.get(attachments[0]);

            if (attachment.isPDFAttachment()) {
                const newTask: MenuTask = {
                    id: item.getField("id") as string,
                    pdfUrl: attachment.getFilePath() as string
                };
                ztoolkit.log("MenuTask -----------------------------------------------------");
                ztoolkit.log(newTask)
                return newTask
            }
        }
    }
}