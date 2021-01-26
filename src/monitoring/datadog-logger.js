import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: DATADOG_CLIENTTOKEN,
  site: 'datadoghq.eu',
  forwardErrorsToLogs: true,
  sampleRate: 100,
})

const info = (msg, infoObj) => {
  let dataString = toString(infoObj)
  datadogLogs.logger.info(msg + ' ' + dataString)
}

const error = (msg, e) => {
  let dataString = toString(e)
  datadogLogs.logger.error(msg + ' ' + dataString)
}

function toString(obj) {
  if (!obj) {
    return ''
  }
  if (typeof obj === 'object') {
    return JSON.stringify(obj, null, 2)
  }
  return obj
}

export default {
  ...datadogLogs.logger,
  error,
  info,
}
