<template>
    <div>
        <ClientOnly>
            <slot name="before"></slot>
            <span ref="countUP"></span>
        </ClientOnly>
     </div>
</template>

<script>

export default {
    name: 'countUP',
    props: {
        startVal: {
            type: Number,
            default: 0
        },
        endVal: {
            type: Number,
            required: true
        },
        decimalPlaces: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 2
        },
        delay: {
            type: Number,
            default: 100
        }
    },
    data() {
        return{
             counter: null
        }
    },
    mounted() {
       this.init()
    },
    methods: {
        init() {
            import('countup.js').then(module => {
                this.$nextTick(() => {
                    this.counter = new module.CountUp(this.$refs.countUP, this.endVal, {
                        startVal: this.startVal,
                        decimalPlaces: this.decimalPlaces,
                        duration: this.duration
                    });
                    setTimeout(() => {
                        this.counter.start()
                    }, this.delay)
                })
            })
        }
    },
    beforeDestroy(){
        this.counter.reset();
        this.counter=null;
    }
}
</script>

<style>
</style>