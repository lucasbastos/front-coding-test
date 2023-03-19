import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import CountryDetails from '../CountryDetails.vue'
import { createRouter, createMemoryHistory } from 'vue-router';

vi.mock('@/api/api', () => ({
    getCountryDetailsApi: () =>
      Promise.resolve([
        {
          Country: 'Brazil',
          CountryCode: 'BR',
          Province: '',
          City: '',
          CityCode: '',
          Lat: '0',
          Lon: '0',
          Cases: 1234,
          Status: 'confirmed',
          Date: '2023-03-25T00:00:00Z',
        },
      ]),
  }));
  
  describe('CountryDetails.vue', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/country/:slug',
          component: CountryDetails,
        },
      ],
    });
  
    it('fetches and displays country details', async () => {
      router.push('/country/brazil');
      await router.isReady();
  
      const wrapper = mount(CountryDetails, {
        global: {
          plugins: [router],
        },
      });
  
      await wrapper.vm.$nextTick();
  
      const dateElement = wrapper.find('p');
      const casesElement = wrapper.find('.item__number');
  
      expect(dateElement.text()).toContain('24/03/2023');
      expect(casesElement.text()).toContain('1234');
    });
  });