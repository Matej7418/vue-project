<template>
  <div class="text-center section mx-[20%] my-[10%]">
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script lang="ts">
import 'v-calendar/dist/style.css';

export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const c = 'text-white mx-[10%] ';
    let attrs = Symbol();
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Lunch with mom.',
            class: c + 'bg-red-600',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Take Noah to basketball practice',
            class: c + 'bg-blue-500',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: c + 'bg-blue-500',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: c + 'bg-indigo-500',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Meeting with new client.',
            class: c + 'bg-teal-500',
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: c + 'bg-pink-500',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Cookout with friends.',
            class: c + 'bg-orange-500',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: c + 'bg-pink-500',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: c + 'bg-red-600',
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },
};
</script>

<style lang="postcss">
::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-track {
  display: none;
}

/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;

  border-radius: 0;
  width: 100%;
} .custom-calendar.vc-container.vc-header {
      background-color: #f1f5f8;
      padding: 10px 0;
    }
.custom-calendar.vc-container.vc-weeks {
  padding: 0;
}
.custom-calendar.vc-container.vc-weekday {
  background-color: var(--weekday-bg);
  border-bottom: var(--weekday-border);
  border-top: var(--weekday-border);
  padding: 5px 0;
}
.custom-calendar.vc-container.vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  height: var(--day-height);
  min-width: var(--day-width);
  background-color: white;
}  .custom-calendar.vc-container.vc-day.weekday-1, .vc-day.weekday-7 {
     background-color: #eff8ff;
   }
.custom-calendar.vc-container.vc-day:not(.on-bottom) {
  border-bottom: var(--day-border);
} .custom-calendar.vc-container.vc-day:not(.on-bottom).weekday-1 {
    border-bottom: var(--day-border-highlight);
  }
.custom-calendar.vc-container.vc-day:not(.on-right) {
  border-right: var(--day-border);
}
.custom-calendar.vc-container.vc-day-dots {
  margin-bottom: 5px;
}
</style>