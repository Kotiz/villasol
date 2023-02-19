import { defineStore } from "pinia";

export const useAboutUsStore = defineStore('AboutUsStore', {
    state: () => ({
        description: 'Budynek został całkowicie odnowiony i przebudowany w roku 2022/2023. Usytuowany jest na osiedlu Zasole niedaleko dworca PKP, przy spokojnej ulicy osiedlowej. Z naszego apartamentu wszędzie jest blisko nawet na pieszo. Na oświęcimski rynek spacerem dojdziemy w 10-15 minut a do muzeum Birkenau które jest najdalej zajmie nam to spacerem ok. 20 minut. W bliskości mamy sklepy, markety, przystanki komunikacji zbiorczej. W niedalekiej odległości ok 5-10 minut pieszo znajduje się duży park miejski na którym znajdziemy także plac zabaw dla dzieci.',
    }) 
})