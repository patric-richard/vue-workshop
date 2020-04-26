import Vue from 'vue';

Vue.filter('capitalize', (value) => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('uppercase', (value) => {
  if (!value) return '';
  return value.toUpperCase();
});

Vue.filter('capLength', (value, limit) => {
  if (!value || !limit) return '';
  return value.length > limit ? `${value.slice(0, limit)}...` : value;
});

Vue.filter('formatDate', (value) => {
  if (!value) return 'Date not defined';
  if (typeof value === 'string') return new Date(value).toLocaleDateString('sv');
  return value.toLocaleDateString('sv');
});
