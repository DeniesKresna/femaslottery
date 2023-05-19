<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Filter</span><wbr />
      <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
        <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen" class="origin-top-right z-10 absolute top-full min-w-80 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1" :class="align === 'right' ? 'right-0' : 'left-0'">
        <div ref="dropdown">
          <div class="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Filters</div>
          <ul class="mb-4">
            <li class="py-1 px-3" v-for="fItem in filterItems" :key="fItem.key">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" v-model="fItem.isUsed"/>
                <span class="text-sm font-medium ml-2">{{fItem.label}}</span>
                <span v-if="fItem.type == 'text'">
                  <input class="form-input w-40 mx-2 py-2 text-xs" type="text" @input="updateFilterValue(fItem, $event)" />
                </span>
                <span v-else-if="fItem.type == 'number'">
                  <input class="form-input w-40 mx-2 py-2 text-xs" type="number" @input="updateFilterValue(fItem, $event)" />
                </span>
                <span v-else-if="fItem.type == 'date'">
                  <input class="form-input w-40 mx-2 py-2 text-xs" type="date" @input="updateFilterValue(fItem, $event)" />
                </span>
                <span v-else-if="fItem.type == 'select'">
                  <select class="form-select w-40 mx-2 py-2 text-xs" @change="updateFilterValue(fItem, $event)">
                    <option :value="null">-</option>
                    <option v-for="opt in fItem.meta.data" :key="opt">{{ opt }}</option>
                  </select>
                </span>
              </label>
            </li>
          </ul>
          <div class="py-2 px-3 border-t border-slate-200 bg-slate-50">
            <ul class="flex items-center justify-between">
              <li>
                <button class="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600">Clear</button>
              </li>
              <li>
                <button class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white" @click="onApplyClicked" @focusout="dropdownOpen = false">Apply</button>
              </li>
            </ul>
          </div>          
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DropdownFilter',
  props: ['align'],
  setup() {

    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)
    const filterValue = ref({})
    const filterItems = ref([
      {
        isUsed: true,
        label: 'Deskripsi',
        key: 'description',
        type: 'text',
        value: ''
      },{
        isUsed: true,
        label: 'Waktu',
        key: 'start_date',
        type: 'date',
        value: ''
      },{
        isUsed: true,
        label: 'Status',
        key: 'status',
        type: 'select',
        value: '',
        meta: {
          data: ["Sudah Selesai", "Belum Selesai"]
        }
      }
    ])

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
      dropdownOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen.value || keyCode !== 27) return
      dropdownOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    const updateFilterValue = (fItem, event) => {
      filterValue.value[fItem.key] = event.target.value
      // TODO: If there is new type cannot implement code above
      // switch (fItem.type) {
      //   case 'text':
      //     filterValue.value[fItem.key] = event.target.value
      //     break;
      //   case 'number':
      //     filterValue.value[fItem.key] = event.target.value
      //     break;
      //   case 'date':
          
      //     break;
      //   default:
      //     break;
      // }
    }

    const onApplyClicked = () => {
      dropdownOpen.value = false

      filterItems.value.forEach(element => {
        if(!element.isUsed){
          delete filterValue.value[element.key]
        }
      });
      console.log(filterValue.value)
    }

    return {
      dropdownOpen,
      trigger,
      dropdown,
      filterItems,
      updateFilterValue,
      onApplyClicked,
    }
  }
}
</script>