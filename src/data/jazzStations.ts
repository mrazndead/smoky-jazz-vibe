export interface JazzStation {
  name: string;
  url: string;
  genre: string;
}

export const jazzStations: JazzStation[] = [
  {
    name: "Jazz24",
    url: "https://live.wostreaming.net/direct/ppm-jazz24mp3-ibc1",
    genre: "Classic Jazz",
  },
  {
    name: "SmoothJazz.com",
    url: "https://smoothjazz.cdnstream1.com/2585_128.mp3",
    genre: "Smooth Jazz",
  },
  {
    name: "KCSM Jazz",
    url: "https://ice7.securenetsystems.net/KCSM",
    genre: "Public Jazz",
  },
  {
    name: "Jazz Groove",
    url: "https://east-mp3-128.streamguys1.com/100jazz128mp3",
    genre: "Jazz Groove",
  },
  {
    name: "Audiophile Jazz",
    url: "https://cast5.my-control-panel.com/proxy/jazzpla1/stream",
    genre: "Audiophile Jazz",
  },
];
