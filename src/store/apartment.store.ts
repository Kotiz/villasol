// import { generateFakeData, Item } from "@/models/item.model";

import { defineStore } from "pinia";
// import axios from "@/plugins/axios"
import axios from "axios"

export type RootState = {
    cokolwiek:[]
};

export const usePayoutStore = defineStore({
    id: "payoutStore",
    state: () =>
        ({
            cokolwiek: [],
        } as RootState),

    actions: {

        async retrieveApartments() {
            try {
                const data = await axios.get(`/api/apartaments`)
                console.log('data', data);
                // this.users = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }

        // retrievePayout(payoutId: string) {
        //     payoutId
        //         await this.$axios.get(`/nxcs-cash-api/payout/getMostRecentPayouts`).then((r) => {
        //             const dtos: PayoutDTO[] = r.data;
        //
        //             dtos.forEach((dto: PayoutDTO) => {
        //                 const payout = new Payout(dto);
        //                 payoutStore.addPayout(payout);
        //             })
        //         });
        //
        //     if (!payout) return;
        //
        //     this.payouts.push(payout);
        // },
        //
        // updateItem(id: string, payload: Item) {
        //     if (!id || !payload) return;
        //
        //     const index = this.findIndexById(id);
        //
        //     if (index !== -1) {
        //         this.items[index] = generateFakeData();
        //     }
        // },

        // deleteItem(id: string) {
        //     const index = this.findIndexById(id);
        //
        //     if (index === -1) return;
        //
        //     this.items.splice(index, 1);
        // },
        //
        // findIndexById(id: string) {
        //     return this.items.findIndex((item) => item.id === id);
        // },
    },
});

// export default usePayoutStore;