import type {MediaObject} from "./MediaObject";

export type ResponseObject = {
    content_description: string,
    created: number,
    flags: string[],
    hasaudio: boolean,
    id: string,
    itemurl: string,
    media_formats: { [ContentFormat: string]: MediaObject },
    tags: string[],
    title: string,
    url: string

}