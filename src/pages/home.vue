<script setup lang="ts">
import Desktop from '@/layout/desktop/index.vue'
import { ref, watch,  onMounted } from 'vue';
import Box from '@/components/box.vue'
import SalekAvatar from '@/components/salekAvatar.vue'
import Options from '@/components/options.vue'
import OptionsBtn from '@/components/optionsBtn.vue'
import Choices from '@/components/choices.vue'
import choicesBtn from '@/components/choicesBtn.vue';
import ProgressBox from "@/components/ProgressBox.vue";
import ProgressFill from "@/components/ProgressFill.vue";

const steps = ref(2)
const progress = ref(10);

const selectedChoice = ref<string | null>(null);
  const incrementSteps = () => {
  if (steps.value < totalSteps) {
    steps.value++;
    console.log(`Step incremented to ${steps.value}`);
  }
};
// const disabled = ref(true) 
// const selectedChoice = ref<string | null>(null);

// Method to handle selection

onMounted(() => {
  console.log('Component Mounted');
});

const totalSteps = 4; // Total number of steps
watch(steps, (newStep) => {
  progress.value = (newStep / totalSteps) * 100;
  console.log(`Progress updated to ${progress.value}%`);

});
// const foo = ()=>{
//   disabled.value = false
//   steps.value++
// }

const handleSelectChoice = (choice: string) => {
  selectedChoice.value = choice; // Set the selected choice
    console.log(`Choice selected: ${choice}`);

};
// const incrementSteps = () => {
//   if (steps.value < totalSteps) {
//     steps.value++;
//     console.log(`Step incremented to ${steps.value}`);
//   }
// };
// const selectChoice = () => {
//   console.log("ssssss")
//   // alert('ssss')
//   // selectedChoice.value = choice;
//   // foo()
//   // console.log(`Selected choice: ${choice}`);
// };
const stations = [
    'العتبة',
    'محمد نجيب',
    'سعد زغلول',
    'الشهداء',
    'عرابي',
    'ناصر',
    'السادات',
    'الأوبرا',
    'السيدة زينب',
    'الملك الصالح',
    'مارجرجس',
    'الزهراء',
    'دار السلام',
    'الدقي',
    'البحوث',
    'جامعة القاهرة',
    'فيصل',
    'الجيزة',
    'أم المصريين',
    'ساقية مكي',
    'المنيب',
    'باب الشعرية',
    'الجيش',
    'عبده باشا',
    'العباسية',
    'أرض المعارض',
    'الاستاد',
    'كلية البنات',
    'الأهرام',
    'غمرة',
    'الدمرداش',
    'منشية الصدر',
    'كوبري القبة',
    'حمامات القبة',
    'سراي القبة',
    'مسرة',
    'روض الفرج',
    'سانت تريزا',
    'الخلفاوي',
    'المظلات',
    'كلية الزراعة',
    'شبرا الخيمة',
    'حدائق المعادي',
    'المعادي',
    'ثكنات المعادي',
    'طرة البلد',
    'كوتسيكا',
    'طرة الأسمنت',
    'حدائق الزيتون',
    'حلمية الزيتون',
    'المطرية',
    'عين شمس',
    'عزبة النخل',
    'المرج',
    'المرج الجديدة',
    'المعصرة',
    'حدائق حلوان',
    'وادي حوف',
    'جامعة حلوان',
    'عين حلوان',
    'حلوان',
    'هارون',
    'هليوبوليس',
    'ألف مسكن',
    'نادي الشمس',
    'النزهة',
    'هشام بركات',
    'قباء',
    'عمر بن الخطاب',
    'الهايكستب',
    'عدلي منصور',
    'ماسبيرو',
    'صفاء حجازي',
    'كيت كات',
    'السودان',
    'إمبابة',
    'البوهي',
    'القومية',
    'الطريق الدائري',
    'محور روض الفرج',
    'التوفيقية',
    'وادي النيل',
    'جامعة الدول',
    'بولاق الدكرور',
]

interface OptionsBtns {
    class: string,
    function: () => void,
    title: string,
}

interface Options {
    optionsClass: string,
    optionsBtns: OptionsBtns[]
}

interface StepsDetails {
    avatar: boolean,
    speaker: boolean,
    boxClass: string,
    boxStyle: string,
    boxContent: string,
    choices: string,
    options: Options
    
}

const stepsDetails: StepsDetails[] = [
    {
        avatar: true,
        speaker: true,
        boxClass: 'd-flex align-end',
        boxStyle: '',
        boxContent: `<p>اسمي سالك، وهوايتي اني أساعد أصدقائي ركاب الخط الأخضر الثالث</p>
          <p>تعرف/ي إنك ممكن توفر/ي وقت وفلوس من خلال اشتراكات مترو القاهرة المختلفة؟</p>
          <p>تعالى نشوف إيه الاشتراك المناسب ليك…</p>`,
        choices: '',
        options: {
            optionsClass: 'justify-center align-center',
            optionsBtns: [
                {
                    class: 'btnYellow',
                    function: () => { steps.value++ },
                    title: 'أبــــدأ',
                }
            ]
        },
    },
    {
        avatar: true,
        speaker: true,
        boxClass: 'd-flex align-end justify-center align-center',
        boxStyle: '',
        boxContent: `<p>هل أنت ضمن أي من المجموعات دي؟</p>`,
        choices: `<v-container fluid class="rdmcRtl">
            <v-row class="padingMargin0">
              <v-col class="padingMargin0">
                <choicesBtn class="me-0">
                  طلبة جامعات و
                  <br />
                  مدارس حكومية
                </choicesBtn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="padingMargin0">
                <choicesBtn class="ms-0">ذوي الهمم</choicesBtn>
              </v-col>


            </v-row>
            <v-row class="padingMargin0">
              <v-col class="padingMargin0">
                <choicesBtn class="me-0">
                  السن بين 60 و 69
                </choicesBtn>
              </v-col>

              <v-spacer></v-spacer>
              <v-col class="padingMargin0">
                <choicesBtn class="ms-0"> السن 70 وما فوق</choicesBtn>
              </v-col>


            </v-row>
            <v-row class="padingMargin0">
              <v-col cols="12" class="padingMargin0 d-flex flex-row justify-center align-center">
                <choicesBtn class="mx-auto">
                  لا, أنا مش ضمن <br>المجموعات دي
                </choicesBtn>
              </v-col>
            </v-row>
          </v-container>`,
        options: {
            optionsClass: 'd-flex justify-center align-center',
            optionsBtns: [
                {
                    class: 'btnYellow',
                    function: () => { steps.value++ },
                    title: 'أبــــدأ',
                }
            ]

        },
    }

]
</script>

<template>
    <Desktop>
      <br>
      <ProgressBox :progress="progress">
    <ProgressFill :progress="progress" />
  </ProgressBox>
  <div class="content">
    <Choices :steps="steps" @select="handleSelectChoice" />
            <span class="progress-percentage">{{ progress }}%</span>

  </div>
  <!-- <div class="progress-container">
        <v-progress-linear
          :value="progress"
          color="black"
          height="5"
          class="progress-bar"
        ></v-progress-linear>
        <span class="progress-percentage">{{ progress }}%</span>
      </div> -->



      <!-- <v-progress-linear
      :value="progress"
      track-color="transparent"
      color="transparent"
      height="30"
      top="4.410"
      class="mb-4 my-progress-bar"
      outline
    >
    <template #default>
        <span class="progress-label">{{ Math.round(progress) }}%</span>
        
      </template>
    </v-progress-linear> -->

        <div v-if="steps === 1" class="avatar-container">
            <SalekAvatar />
              <Box class="d-flex align-end justify-center align-center box-style" style="padding-top: 90px;">
                <v-img class="speakerIcon" src="/assets/images/speaker.svg" width="30" height="30"></v-img>
               
                <p>اسمي سالك، وهوايتي اني أساعد أصدقائي ركاب الخط الأخضر الثالث</p>
                <p>تعرف/ي إنك ممكن توفر/ي وقت وفلوس من خلال اشتراكات مترو القاهرة المختلفة؟</p>
                <p>تعالى نشوف إيه الاشتراك المناسب ليك…</p>
            </Box>
            <Options class="justify-center align-center">
                <OptionsBtn class="btnYellow" @click="steps++">أبــــدأ</OptionsBtn>
            </Options>
        </div>


        <div v-else-if="steps === 2">
            <SalekAvatar />
            <Box class="d-flex align-end justify-center align-center box-style" style="padding-top: 90px;">
                <v-img class="speakerIcon" src="/assets/images/speaker.svg" width="30" height="30" ></v-img>
                <p>هل أنت ضمن أي من المجموعات دي؟</p>
            </Box>
            <Choices class="choices-style">
                <v-container fluid class="rdmc-rtl ms-10">
                    <v-row class="paddingMargin0 justify-center" >
                        <v-col cols="2">
              <choicesBtn 
              class="choice-btn" 
              :class="{ 'btn-yellow': selectedChoice === 'السن 70 وما فوق' }"
                @click="handleSelectChoice('السن 70 وما فوق')"
              >السن 70 وما فوق
            </choicesBtn>
            </v-col>

            <v-col cols="2">
              <choicesBtn 
              class="choice-btn"
              :class="{ 'btn-yellow': selectedChoice === 'السن بين 60 و 69' }"
                @click="handleSelectChoice('السن بين 60 و 69')"
              >
 
                السن بين 60 و 69</choicesBtn>
            </v-col>
            <v-col cols="2">
              <choicesBtn 
              class="choice-btn"
              :class="{ 'btn-yellow': selectedChoice === 'ذوي الهمم' }"
                @click="handleSelectChoice('ذوي الهمم')"
              >
 ذوي الهمم

              </choicesBtn>
            </v-col>

            <v-col cols="2" class="paddingMargin0">
              <choicesBtn
               class="choice-btn"
               :class="{ 'btn-yellow': selectedChoice === 'طلبة جامعات و مدارس حكومية' }"
                @click="handleSelectChoice('طلبة جامعات و مدارس حكومية')"
              >
   طلبة جامعات و<br />مدارس حكومية
            </choicesBtn>
            </v-col>

            <v-col cols="2">
              <choicesBtn 
              class="choice-btn"
              :class="{ 'btn-yellow': selectedChoice === 'لا, أنا مش ضمن المجموعات دي' }"
                @click="handleSelectChoice('لا, أنا مش ضمن المجموعات دي')"
              >
                
                لا, أنا مش ضمن<br />المجموعات دي
            </choicesBtn>
            </v-col>
            
          </v-row>
        </v-container>
      </Choices>


      <Options class="justify-center align-center">
        <OptionsBtn
         class="btnYellow" 
           :disabled="!selectedChoice"
         @click="steps++">التالي</OptionsBtn>
                <OptionsBtn class="ms-10 btnBlack" @click="steps--">السابق</OptionsBtn>
            </Options>
        </div>

        <div v-if="steps === 3">
            <SalekAvatar />
            <Box class="d-flex align-end justify-center align-center" style="padding-top: 90px;">
                <v-img class="speakerIcon" src="/assets/images/speaker.svg" width="30" height="30"></v-img>
                <p>
                    بتعمل كام رحلة بالمترو في الأسبوع؟ (مشوار رايح جاي = رحلتين)
                </p>
            </Box>   

            <Choices class="choices-style">
                <v-container fluid class="rdmcRtl">
                    <v-row class="paddingMargin0 justify-center" >
                        <v-col cols="2">
                <choicesBtn
               class="choice-btn"
               :class="{ 'btn-yellow': selectedChoice === 'أقل من 4 رحلات' }"
                @click="handleSelectChoice('أقل من 4 رحلات')"
              >
                                أقل من 4 رحلات
                            </choicesBtn>
                        </v-col>

                         <v-col cols="2">
              <choicesBtn 
              class="choice-btn"
              :class="{ 'btn-yellow': selectedChoice === 'من 4 لـ 7 رحلات' }"
                @click="handleSelectChoice('من 4 لـ 7 رحلات')"
              >
                                من 4 لـ 7 رحلات
                            </choicesBtn>
                        </v-col>
                   <v-col cols="2">
              <choicesBtn
               class="choice-btn"
               :class="{ 'btn-yellow': selectedChoice === 'من 8 لـ 11 رحلات' }"
                @click="handleSelectChoice('من 8 لـ 11 رحلات')"
              >
                                من 8 لـ 11 رحلات</choicesBtn>
                        </v-col>
                        <v-col cols="2" class="paddingMargin0">
                            <choicesBtn 
                            class="choice-btn"
                            :class="{ 'btn-yellow': selectedChoice === 'أكتر من 12 رحلة' }"
                @click="handleSelectChoice('أكتر من 12 رحلة')"
              >
                                أكتر من 12 رحلة
                            </choicesBtn>
                        </v-col>

                    </v-row>
                </v-container>
            </Choices>

            <Options class="justify-center align-center">
        <OptionsBtn class="btnYellow"
        :disabled="!selectedChoice"
         @click="steps++">التالي</OptionsBtn>
                <OptionsBtn class="ms-10 btnBlack" @click="steps--">السابق</OptionsBtn>
            </Options>
        </div>

        <div v-if="steps === 4">
            <SalekAvatar />
            <Box class="d-flex align-end justify-center align-center" style="padding-top: 90px;">
                <v-img class="speakerIcon" src="/assets/images/speaker.svg" width="30" height="30"></v-img>
                <p>
                    بتعمل كام رحلة بالمترو في الأسبوع؟ (مشوار رايح جاي = رحلتين)
                </p>
            </Box>
            <Choices style="max-width: 60vw;">
                <!-- <v-container fluid class="rdmcRtl">
                  <v-row class="padingMargin0" >
                    <v-col class="padingMargin0"> -->
                      <div rtl style="direction: rtl !important;" class="me-2 d-flex flex-row justify-center align-center">
                        <select class="selectStations">
                          <option v-for="(item, i) in stations" :key="i" :value="item" >
                            {{ item }}
                          </option>

                        </select>
                        <select class="selectStations ms-3" >
                          <option v-for="(item, i) in stations" :key="i" :value="item" >
                            {{ item }}
                          </option>

                        </select>
                                <!-- <v-select
                                 variant="outlined" 
                                 label="من محطة" 
                                 color="white"
                                  class="bordered-lg "
                                    :items="stations"
                                    ></v-select> -->
                                    </div>
                        <!-- </v-col> -->
                      
                              <!-- <v-col class="padingMargin0">

                            <div rtl style="direction: rtl !important;" class="ms-2">
                                <v-select variant="outlined" label="الي محطة" color="white" class="bordered-lg "
                                    :items="stations"
                                    ></v-select>
                            </div>
                        </v-col> -->
                    <!-- </v-row>
                </v-container> -->
            </Choices>
            <Options class="justify-center align-center">
        <OptionsBtn class="btnYellow"
        :disabled="!selectedChoice"
        @click="steps++">التالي</OptionsBtn>
                <OptionsBtn class="ms-10 btnBlack" @click="steps--">السابق</OptionsBtn>
            </Options>
        </div> 
    </Desktop>
</template>


<style scoped>

.v-input__control {
    border: 1px solid #fff;
    color: #FFF !important;
    border-radius: 15px;
}
.choice-btn.btn-yellow {
  background-color: yellow;
  color: black;
}
.v-input--is-rtl .v-label,
/* For the label */
.v-input--is-rtl input {
    /* For the input */
    text-align: right !important;
    direction: rtl !important;
}

</style> 
