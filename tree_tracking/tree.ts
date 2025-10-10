import { RelativePathString } from "expo-router";

export type TreeItem = {
    name: string;
    describe: string;
    path: RelativePathString;
}

type TreeType = {
    screens: TreeItem[]
}

export const tree: TreeType = {
    screens: [
        {
            name: 'Pix',
            describe: 'Area pix',
            path: '../(screens)/(pix)'
        },
        {
            name: 'Enviar pix',
            describe: 'Informe o valor a ser enviado',
            path: "../(screens)/(pix)/send"
        },
        {
            name: 'Receber via pix',
            describe: 'Gera um qrcode para você receber',
            path: "../(screens)/(pix)/receiv"
        }
    ]
}