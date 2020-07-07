const reactPlayerOptions = {
  youtube: {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      enablejsapi: 1,
      disablekb: 1,
      modestBranding: 1,
      fs: 0,
      iv_load_policy: 0,
    },
  },
  dailymotion: {
    params: {
      autoplay: true,
      "autoplay-mute": true,
      controls: false,
      "sharing-enable": false,
      "queue-enable": false,
      "ui-logo": false,
      "ui-start-screen-info": false,
    },
  },
}

export default reactPlayerOptions
