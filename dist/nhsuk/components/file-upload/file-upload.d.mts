/**
 * File upload component
 *
 * @augments ConfigurableComponent<FileUploadConfig>
 */
export class FileUpload extends ConfigurableComponent<FileUploadConfig, HTMLElement> {
    /**
     * File upload default config
     *
     * @see {@link FileUploadConfig}
     * @constant
     * @type {FileUploadConfig}
     */
    static defaults: FileUploadConfig;
    /**
     * File upload config schema
     *
     * @constant
     * @satisfies {Schema<FileUploadConfig>}
     */
    static schema: Readonly<{
        properties: {
            i18n: {
                type: "object";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - File input element
     * @param {FileUploadConfig} [config] - File Upload config
     */
    constructor($root: Element | null, config?: FileUploadConfig);
    /**
     * @type {boolean | undefined}
     */
    enteredAnotherElement: boolean | undefined;
    $input: HTMLFileInputElement;
    id: string;
    i18n: I18n;
    $button: HTMLButtonElement;
    $status: HTMLSpanElement;
    $announcements: HTMLSpanElement;
    /**
     * Updates the visibility of the dropzone as users enters the various elements on the page
     *
     * @param {DragEvent} event - The `dragenter` event
     */
    updateDropzoneVisibility(event: DragEvent): void;
    /**
     * Show the drop zone visually
     */
    showDraggingState(): void;
    /**
     * Hides the drop zone visually
     */
    hideDraggingState(): void;
    /**
     * Handles user dropping on the component
     *
     * @param {DragEvent} event - The `dragenter` event
     */
    onDrop(event: DragEvent): void;
    /**
     * Check if the value of the underlying input has changed
     */
    onChange(): void;
    /**
     * Looks up the `<label>` element associated to the field
     *
     * @returns {HTMLElement} The `<label>` element associated to the field
     * @throws {ElementError} If the `<label>` cannot be found
     */
    findLabel(): HTMLElement;
    /**
     * When the button is clicked, emulate clicking the actual, hidden file input
     */
    onClick(): void;
    /**
     * Create a mutation observer to check if the input's attributes altered.
     */
    observeDisabledState(): void;
    /**
     * Synchronise the `disabled` state between the input and replacement button.
     */
    updateDisabledState(): void;
}
export type HTMLFileInputElement = HTMLInputElement & {
    files: FileList;
};
/**
 * File upload config
 */
export type FileUploadConfig = {
    /**
     * - File upload translations
     */
    i18n?: FileUploadTranslations | undefined;
};
/**
 * Messages used by the component
 */
export type FileUploadTranslations = {
    /**
     * - The text of the button that opens the file picker
     */
    chooseFile?: string | undefined;
    /**
     * - The text informing users they can drop files
     */
    dropInstruction?: string | undefined;
    /**
     * - The text displayed when multiple files
     * have been chosen by the user
     */
    multipleFilesChosen?: TranslationPluralForms | undefined;
    /**
     * - The text to displayed when no file has been chosen by the user
     */
    noFileChosen?: string | undefined;
    /**
     * - The text announced by assistive technology
     * when user drags files and enters the drop zone
     */
    enteredDropZone?: string | undefined;
    /**
     * - The text announced by assistive technology
     * when user drags files and leaves the drop zone without dropping
     */
    leftDropZone?: string | undefined;
};
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { I18n } from '../../i18n.mjs';
import type { TranslationPluralForms } from '../../i18n.mjs';
//# sourceMappingURL=file-upload.d.mts.map