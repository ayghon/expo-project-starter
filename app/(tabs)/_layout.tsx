import { Routes } from '@types';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name={Routes.Home}
        options={{
          title: 'Tab One',
        }}
      />
    </Tabs>
  );
}
