const reactPlayerOptions = {
  youtube: {
    playerVars: {
      autoplay: 1,
      controls: 1,
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
      autoplay: false,
      mute: true,
      controls: true,
      "sharing-enable": false,
      "queue-enable": false,
      "ui-logo": false,
      "ui-start-screen-info": false,
    },
  },
}

export default reactPlayerOptions
