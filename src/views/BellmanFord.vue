<template>
    <div>
        <v-card>
            <v-btn :click="this.relax()">Run Bellman Ford</v-btn>
            <v-sheet v-for="(iteration, key, index) in iterations">
                <v-list-tile>
                   {{key}} - {{iteration}}
                </v-list-tile>
                <v-divider></v-divider>
            </v-sheet>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Bellman-Ford',
    data(){
        return{
            size: 12,
            inf:99999,
            //      0   1   2   3   4   5   6   7   8   9   10  11
            nodes:['s','a','b','c','d','e','f','g','h','i','j','t'],
            edges:[
                {
                    sid: 0,
                    tid: 1,
                    weight:60
                },
                {
                    sid: 0,
                    tid: 4,
                    weight:-21
                },
                {
                    sid: 0,
                    tid: 7,
                    weight:60
                },
                {
                    sid: 1,
                    tid: 2,
                    weight:-19
                },
                {
                    sid: 2,
                    tid: 3,
                    weight:-5
                },
                {
                    sid: 2,
                    tid: 5,
                    weight:30
                },                
                {
                    sid: 3,
                    tid: 5,
                    weight:-3
                },
                {
                    sid: 4,
                    tid: 1,
                    weight:-5
                },
                {
                    sid: 4,
                    tid: 7,
                    weight:-3
                },
                {
                    sid: 5,
                    tid: 4,
                    weight:-7
                },
                {
                    sid: 5,
                    tid: 8,
                    weight:36
                },
                {
                    sid: 5,
                    tid: 6,
                    weight:-29
                },   
                {
                    sid: 6,
                    tid: 3,
                    weight:-7
                },
                {
                    sid: 6,
                    tid: 9,
                    weight:36
                },
                {
                    sid: 6,
                    tid: 11,
                    weight:-29
                },
                {
                    sid: 7,
                    tid: 8,
                    weight:-1
                },
                {
                    sid: 7,
                    tid: 10,
                    weight:12
                },
                {
                    sid: 8,
                    tid: 2,
                    weight:18
                },                 
                {
                    sid: 8,
                    tid: 4,
                    weight:54
                }, 
                {
                    sid: 9,
                    tid: 5,
                    weight:6
                }, 
                {
                    sid: 9,
                    tid: 8,
                    weight:24
                },   
                {
                    sid: 10,
                    tid: 8,
                    weight:-3
                }, 
                {
                    sid: 10,
                    tid: 9,
                    weight:30
                },    
                {
                    sid: 11,
                    tid: 3,
                    weight:6
                },                                                               
            ],
            currWeight:[0,9999,9999,9999,9999,9999,9999,9999,9999,9999,9999,],
            iterations:[],
        }
    },
    created() {
           
    },
    methods: {
        bellmanFord(){
            for (let index = 0; index < this.size.length; index++) {
                this.relax()
                
            }
        },
        relax(){
            for (let index = 0; index < this.size; index++) {
                this.updateNode(index)


                // var source = this.edges[index].sid
                // var target = this.edges[index].tid
                // var w = this.edges[index].weight
                // if (this.currWeight[source] == null) {
                //     this.currWeight[source] = w
                // }
                // else{
                //     var calculated = this.currWeight[source] + w
                //     if (calculated < this.currWeight[target]) {
                //         this.currWeight[target] = calculated
                //     }
                // }
                
            console.log(this.currWeight)
            }
            // var relaxResult = this.currWeight
            // this.iterations.push(relaxResult)
        },
        updateNode(currNode){
            var edges = this.edges
            for (let index = 0; index < edges.length; index++) {
                    var source = edges[index].sid
                    var target = edges[index].tid
                    var w = edges[index].weight
                    var calculated = this.currWeight[source] + w
                if (source == currNode) {
                    this.currWeight[target] = Math.min(this.currWeight[target], calculated);
                }
                
            }
        }
        
    },
}
</script>