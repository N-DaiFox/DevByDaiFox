// Create a Twitch.Embed object that will render within the "twitch-embed" element
type="text/javascript">
new Twitch.Embed("twitch-embed", {
  width: 854,
  height: 480,
  channel: "ryuuna_vt",
  layout: "video",
  autoplay: true,
  muted: true,
  
});
embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  var player = embed.getPlayer();
  player.play();
});