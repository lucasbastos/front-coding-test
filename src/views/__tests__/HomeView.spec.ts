import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
import { createRouter, createMemoryHistory } from 'vue-router';
import CountryData from '../../components/CountryData.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSearch);

vi.mock('@/api/api', () => ({
  getCountriesApi: () =>
    Promise.resolve([
      {
        ID: '1',
        Country: 'Brazil',
        CountryCode: 'BR',
        Slug: 'brazil',
        TotalConfirmed: 1000000,
        TotalDeaths: 50000,
        FatalitiesRate: 5,
      },
    ]),
}));
  
  describe('HomeView.vue', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/',
          component: HomeView,
        },
      ],
    });
  
    it('fetches and displays countries data', async () => {
      router.push('/');
      await router.isReady();
  
      const wrapper = mount(HomeView, {
        global: {
          components: {
            FontAwesomeIcon,
          },
          plugins: [router],
        },
      });
  
      await wrapper.vm.$nextTick();
  
      const countryDataComponents = wrapper.findAllComponents(CountryData);
  
      expect(countryDataComponents.length).toBe(1);
      expect(countryDataComponents[0].props('country')).toEqual({
        ID: '1',
        Country: 'Brazil',
        CountryCode: 'BR',
        Slug: 'brazil',
        TotalConfirmed: 1000000,
        TotalDeaths: 50000,
        FatalitiesRate: 5,
      });
    });
  });