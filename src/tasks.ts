export type MenuTask = {
    [key in keyof typeof emptyMenuTask]: any;
}

const emptyMenuTask = {
    title: "",
    firstCreator: "",
    abstractNote: "",
    artworkMedium: "",
    medium: "",
    artworkSize: "",
    date: "",
    language: "",
    shortTitle: "",
    archive: "",
    archiveLocation: "",
    libraryCatalog: "",
    callNumber: "",
    url: "",
    accessDate: "",
    rights: "",
    extra: "",
    audioRecordingFormat: "",
    seriesTitle: "",
    volume: "",
    numberOfVolumes: "",
    place: "",
    label: "",
    publisher: "",
    runningTime: "",
    ISBN: "",
    billNumber: "",
    number: "",
    code: "",
    codeVolume: "",
    section: "",
    codePages: "",
    pages: "",
    legislativeBody: "",
    session: "",
    history: "",
    blogTitle: "",
    publicationTitle: "",
    websiteType: "",
    type: "",
    series: "",
    seriesNumber: "",
    edition: "",
    numPages: "",
    bookTitle: "",
    caseName: "",
    court: "",
    dateDecided: "",
    docketNumber: "",
    reporter: "",
    reporterVolume: "",
    firstPage: "",
    versionNumber: "",
    system: "",
    company: "",
    programmingLanguage: "",
    proceedingsTitle: "",
    conferenceName: "",
    DOI: "",
    dictionaryTitle: "",
    subject: "",
    encyclopediaTitle: "",
    distributor: "",
    genre: "",
    videoRecordingFormat: "",
    forumTitle: "",
    postType: "",
    committee: "",
    documentNumber: "",
    interviewMedium: "",
    issue: "",
    seriesText: "",
    journalAbbreviation: "",
    ISSN: "",
    letterType: "",
    manuscriptType: "",
    mapType: "",
    scale: "",
    country: "",
    assignee: "",
    issuingAuthority: "",
    patentNumber: "",
    filingDate: "",
    applicationNumber: "",
    priorityNumbers: "",
    issueDate: "",
    references: "",
    legalStatus: "",
    episodeNumber: "",
    audioFileType: "",
    repository: "",
    archiveID: "",
    citationKey: "",
    presentationType: "",
    meetingName: "",
    programTitle: "",
    network: "",
    reportNumber: "",
    reportType: "",
    institution: "",
    nameOfAct: "",
    codeNumber: "",
    publicLawNumber: "",
    dateEnacted: "",
    thesisType: "",
    university: "",
    studio: "",
    websiteTitle: "",
    id: "",
    year: "",
    itemID: "",
    itemTypeID: "",
    dateAdded: "",
    dateModified: "",
    libraryID: "",
    key: "",
    version: "",
    synced: "",
    createdByUserID: "",
    lastModifiedByUserID: "",
    sortCreator: "",
    deleted: "",
    inPublications: "",
    parentID: "",
    parentKey: "",
    attachmentCharset: "",
    attachmentLinkMode: "",
    attachmentContentType: "",
    attachmentPath: "",
    attachmentSyncState: "",
    attachmentSyncedModificationTime: "",
    attachmentSyncedHash: "",
    attachmentLastProcessedModificationTime: "",
    feedItemGUID: "",
    feedItemReadTime: "",
    feedItemTranslatedTime: ""
}

type Item = {
    [key in Zotero.Item.ItemField]: string;
};

export function addMenuTask(
    itemId: number
) {
    const item = Zotero.Items.get(itemId);
    // item.getBestAttachment()
    const newTask = {}
    if (item?.isRegularItem()) {
        const attachments = item.getAttachments();
        if (attachments && attachments.length) {
            let attachmentPdf;
            for (const a of attachments) {
                const attachment = Zotero.Items.get(a);
                if (attachment.isPDFAttachment()) {
                    attachmentPdf = attachment;
                }
            }

            if (attachmentPdf && attachmentPdf.isPDFAttachment()) {

                for (const key of Object.keys(emptyMenuTask)) {
                    (newTask as any)[key] = item.getField(key as Zotero.Item.ItemField)
                }
                (newTask as any).pdfUrl = attachmentPdf.getFilePath() as string
                (newTask as any).attachment = {}
                for (const key of Object.keys(emptyMenuTask)) {
                    (newTask as any).attachment[key] = attachmentPdf.getField(key as Zotero.Item.ItemField)
                }
                (newTask as any).tags = item.getTags()
                ztoolkit.log("MenuTask -----------------------------------------------------");
                ztoolkit.log(newTask)
                return newTask
            }
        }
    } else if (item?.isPDFAttachment()) {
        (newTask as any).pdfUrl = item.getFilePath() as string
        (newTask as any).attachment = {}
        for (const key of Object.keys(emptyMenuTask)) {
            (newTask as any).attachment[key] = item.getField(key as Zotero.Item.ItemField)
        }
        (newTask as any).tags = item.getTags()
        return newTask
    }
    return undefined
}