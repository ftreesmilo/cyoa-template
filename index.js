
window.rpc.call('load', { video: 'video.mp4', loop: true }, false);

const state = await window.rpc.call('state');
state.views = (state.views || 0) + 1;
