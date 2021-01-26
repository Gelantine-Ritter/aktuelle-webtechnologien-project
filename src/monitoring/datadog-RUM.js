import { datadogRum } from '@datadog/browser-rum'

datadogRum.init({
  applicationId: APPLICATION_ID,
  clientToken: DATADOG_CLIENTTOKEN,
  site: 'datadoghq.eu',
  service: 'magic-card-deck',

  sampleRate: 100,
  trackInteractions: true,
})
