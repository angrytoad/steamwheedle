// @flow
export type CarbonDate = {
  date: string,
  timezone: string,
  timezone_type: number,
}

export type GlobalCountdown = {
  duration: number,
  lastUpdate: CarbonDate,
  nextUpdate: CarbonDate,
  nextUpdateSeconds: number,
}

export type SoundSettings = {
  playMusic: boolean,
  playAmbient: boolean,
}
