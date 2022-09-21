
window.rpc.call('load', { video: 'video.mp4', loop: true }, false);

const state = await window.rpc.call('state');
state.views = (state.views || 0) + 1;

window.rpc.call('save', { state }, false);

const choice = await window.rpc.call('prompt', {
  content: `You've viewd this ${state.views} times.`,
  choices: ['Ok']
});
