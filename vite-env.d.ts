// <reference types="vite/client" />

// Allow importing CSS files
declare module "*.css";

// Allow importing SVG files as React components
declare module "*.svg" {
    import * as React from "react";
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

// Allow importing SVG as plain URL (e.g., `import iconUrl from 'icon.svg?url'`)
declare module "*.svg?url" {
    const src: string;
    export default src;
}
