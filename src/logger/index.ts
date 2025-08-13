import logger from "pino";
import pretty from "pino-pretty"
import dayjs from "dayjs";

const format = pretty({
    colorize: true,
    sync: true,
    crlf: false, // --crlf
    errorLikeObjectKeys: ['err', 'error'], // --errorLikeObjectKeys
    errorProps: '', // --errorProps
    levelFirst: false, // --levelFirst
    messageKey: 'msg', // --messageKey
    levelKey: 'level', // --levelKey
    messageFormat: false, // --messageFormat
    timestampKey: 'time', // --timestampKey
    translateTime: true, // --translateTime
    ignore: 'pid,hostname', // --ignore
    include: 'level,time', // --include
    hideObject: false, // --hideObject
    singleLine: false, // --singleLine
    customPrettifiers: {
        time: () => `[ ${dayjs().format()} ]`
    }
})

const log = logger(format);

export default log;