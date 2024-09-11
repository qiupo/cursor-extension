declare global {
    interface Window {
        createMouseCanvas?: (options: { type: string; color: string }) => Canvas;
        cursoreffects: any;
    }
}