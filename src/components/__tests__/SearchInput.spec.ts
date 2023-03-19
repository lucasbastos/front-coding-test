import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSearch);

describe('SearchInput.vue', () => {
  it('emits "input" event when the input value changes', async () => {
    const wrapper = mount(SearchInput, {
      global: {
        components: {
          FontAwesomeIcon,
        },
      },
      props: {
        value: '',
      },
    });

    const inputElement = wrapper.find('.input-container__input');
    inputElement.setValue('Brazil');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()).toHaveProperty('input');
    expect(wrapper.emitted().input[0]).toEqual(['Brazil']);
  });
});
