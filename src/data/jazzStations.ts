export interface JazzStation {
  name: string;
  url: string;
  genre: string;
}

export const jazzStations: JazzStation[] = [
  {
    name: "WWOZ NOLA",
    url: "https://wwoz-sc.streamguys1.com/wwoz-hi.mp3",
    genre: "New Orleans",
  },
  {
    name: "SmoothJazz",
    url: "https://smoothjazz.cdnstream1.com/2585_128.mp3",
    genre: "Smooth Jazz",
  },
  {
    name: "Radio Swiss Jazz",
    url: "https://stream.srg-ssr.ch/m/rsj/aacp_48",
    genre: "Swiss Jazz",
  },
  {
    name: "WICN Jazz",
    url: "https://wicn-ice.streamguys1.com/live-mp3",
    genre: "Public Jazz",
  },
  {
    name: "The JazzKnob",
    url: "https://cast6.asurahosting.com/proxy/kennethw/stream",
    genre: "Curated Jazz",
  },
  {
    name: "Jazz 93.5 CO",
    url: "https://ice9.securenetsystems.net/JAZZ9352",
    genre: "Colorado Jazz",
  },
  {
    name: "Jazz Radio",
    url: "http://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3",
    genre: "Classic Jazz",
  },
  {
    name: "TSF Jazz Paris",
    url: "http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3",
    genre: "French Jazz",
  },
  {
    name: "WBGO Newark",
    url: "https://wbgo.streamguys1.com/wbgo128",
    genre: "NYC Jazz",
  },
];