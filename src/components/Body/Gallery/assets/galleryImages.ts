// @ts-nocheck
import { importImageSourcesAsObject } from "../../../../ui-kit/utils/importImageSourcesAsObject";

export const galleryImages: Record<string, string> = importImageSourcesAsObject(require.context('./', false, /\.(png|jpe?g|svg)$/));
