import Vue from 'vue';

import Skeleton from 'F:\\workspace\\localDemo\\2018\\pwa\\lavas-2-sample\\core\\Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
