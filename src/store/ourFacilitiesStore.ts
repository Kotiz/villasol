import { defineStore } from "pinia";

export const useOurFacilitieStore = defineStore('OurFacilitiesStore', {
    state: () => ({
        facilitesData: [
            {
              id: 1,
              icon: require(`@/assets/images/icons/scooter.svg`),
              hover_text: "Do dyspozycji gości dwie hulajnogi elektryczne ",
            },
            // {
            //   id: 2,
            //   icon: require(`@/assets/images/icons/emotor.svg`),
            //   hover_text: "Do dyspozycji gości dwa skutery elektryczne",
            // },
            // {
            //   id: 3,
            //   icon: require(`@/assets/images/icons/ecar.svg`),
            //   hover_text: "Ładowarka do aut elektrycznych",
            // },
            // {
            //   id: 4,
            //   icon: require(`@/assets/images/icons/pralka.svg`),
            //   hover_text: "W każdym pokoju znajduje się mała pralka",
            // },
            // {
            //   id: 5,
            //   icon: require(`@/assets/images/icons/kawa.svg`),
            //   hover_text: "W każdym pokoju mały ekspress kapsułkowy",
            // },
          ],
    }) 
})