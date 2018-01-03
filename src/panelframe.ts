import { IPanel } from "./ipanel";

/**
 * Responsible for holding and displaying panels
 */
export class PanelFrame {

    /** The element that represents the frame in the DOM. */
    private frame: HTMLDivElement;

    /** Tracks the visible state of the frame. */
    private isVisible: boolean;

    /** The root of the toolbar */
    private toolbarRoot: HTMLElement;

    /**
     * Creates the panel frame.
     * @param toolbarRoot The DOM element to contain the frame. Should be the root of the toolbar.
     */
    public constructor(toolbarRoot: HTMLElement) {
        this.toolbarRoot = toolbarRoot;
        this.isVisible = false;

        this.frame = document.createElement("div");
        this.frame.setAttribute("id", "PTB_frame");

    }

    /** Show the provided panel, or hide the displayed panel. */
    public toggle(panel: IPanel): void {
        if (!this.isVisible || this.frame.parentNode === null) {
            panel.render(this.frame);
            this.toolbarRoot.appendChild(this.frame);
        } else {
            this.frame.parentNode.removeChild(this.frame);
        }

        this.isVisible = !this.isVisible;
    }
}
