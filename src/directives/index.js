/* eslint-disable */
import Vue from 'vue';
import debounce from 'debounce';

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted(el) {
    // Focus the element
    el.focus();
  },
});

// Debounce input to not fire right away
Vue.directive('debounce', {
  bind(el, binding) {
    el.oninput = debounce(() => {
      el.dispatchEvent(new Event('change'));
    }, binding.value ? parseInt(binding.value, 10) : 500);
  },
});

// Element moves to a random location if mouse is over
Vue.directive('random-location', {
  bind(el) {
    const randPos = () => Math.floor(Math.random() * 80);
    el.moveRandomPos = () => {
      el.style.position = 'fixed';
      el.style.top = `${randPos()}vh`;
      el.style.left = `${randPos()}vw`;
    };
    el.addEventListener('mouseover', el.moveRandomPos);
  },
  unbind(el) {
    el.removeEventListener('mouseover', el.moveRandomPos);
    delete el.moveRandomPos;
  },
});
